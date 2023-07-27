import { connectDB } from "@/src/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req:any, res:any){

    const session = await getServerSession(authOptions);
    console.log(session)



    if(req.method ==='POST'){
        console.log(req.body);
        // 프론트에서 하면되는거 아님? => 프론트는 위조가 가능하기에 서버에서도 해야해!
        if(req.body.title==""){
            return res.status(500).json("제목 빈칸");
        }


      // mongodb 데이터 삽입 (try catch 처리해보자)
        try {
            let client = await connectDB;
            const db = client.db('forum');
            let result = await db.collection('post').insertOne(req.body)
            // return  res.status(200).json("저장완료");
            // 보통은 위와같이 저장완료를 띄우지 않지? 그냥 리다이렉트 시키자!
            return  res.status(200).redirect(302,'/list')
        } catch (error) {
            console.log(error);
            
        }
    }
}