import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req:any, res:any){

    
    if(req.method ==='POST'){

        let session = await getServerSession(req, res, authOptions);
        try {

           req.body =  JSON.parse(req.body);
            let info ={
                comment: req.body.comment,
                parent: new ObjectId(req.body._id),
                author: session.user.email
            }


            let client = await connectDB;
            const db = client.db('forum');
            await db.collection('comment').insertOne(info);
            return  res.status(200).redirect(302,'/list')
        } catch (error) {
            console.log(error);
            
        }
    }
}