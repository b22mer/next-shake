import { connectDB } from "@/src/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req:any, res:any){

    const db = (await connectDB).db("forum");
    const session = await getServerSession(req, res, authOptions);
    
    if (session) {
      if (req.method === 'POST') {
        const body = req.body;
        const user = session?.user as {name: string; email: string; image: string};
        if (!body.title.length || !body.content.length) {
          return res.status(500).json(false);
        } 
        await db.collection("post").insertOne({...body, auth: user.email});
        res.redirect(302, '/list');
      } 
    } else {
      return res.status(500).json(false);
    }
}