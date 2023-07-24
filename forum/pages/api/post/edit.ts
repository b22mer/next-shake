import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req:any, res:any){

    if(req.method ==='POST'){
        console.log(req.body);
        if(req.body.title==""){
            return res.status(500).json("제목 빈칸");
        }
    
        try {
            let client = await connectDB;
            const db = client.db('forum');
            await db.collection('post').updateOne({_id: new ObjectId(req.body._id)},{$set:{title: req.body.title, content:req.body.content}})
            return  res.status(200).redirect(302,'/list')
        } catch (error) {
            console.log(error);
            
        }
    }
}