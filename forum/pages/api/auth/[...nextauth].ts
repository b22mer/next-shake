import NextAuth, { SessionStrategy } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/src/util/database";
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // 1. 로그인 페이지 폼 자동 생성해주는 코드 
      name: "credentials",
      credentials: {
        email: {label: "email", type: "text" },
        password: {label: "password", type: "password"},
      },
      // 2. 로그인 요청 시 실행되는 코드
      // 직접 DB에서 이메일,비번 비교하고 
      // 이메일, 비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials: any) {
        const db = (await connectDB).db('forum');
        const user = await db.collection('user_cred').findOne({email : credentials.email})
        if (!user) {
          console.log('해당 이메일은 없음');
          return null;
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log('비번 틀림');
          return null;
        }
        return user as any;
      },
    })
  ], 
  //기간 설정은 무시됨, github은 access token 유효기간 8시간, refresh token 유효기간 6개월 
  // jwt : { maxAge: 60 },
  
  // 3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 30 * 24 * 60 * 60 // 30일
  },
  callbacks: {
    // 4. jwt 만들 때 실행되는 코드 
    // user 변수는 DB의 유저정보 담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.user = {};
        token.user.name = user.name
        token.user.email = user.email
      }
      return token;
    },
    // 5. 유저 세션이 조회될 때 마다 실행되는 코드
    // getServerSession 실행시 토큰에 있던 어떤 정보 뽑아서 컴포넌트로 보내줄지 결정가능 
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },
  // 기본적 JWT 방식 사용 - 토큰 방식
  secret : process.env.NEXTAUTH_URL,
  adapter : MongoDBAdapter(connectDB),
};

export default NextAuth(authOptions); 