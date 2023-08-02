import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req:any, res:any){

    
    if(req.method ==='GET'){

        let session = await getServerSession(req, res, authOptions);
        try {
            let client = await connectDB;
            const db = client.db('forum');

            let result = await db.collection('post')
            await db.collection('comment').find().toArray();
            return  res.status(200).redirect(302,'/list')
        } catch (error) {
            console.log(error);
            
        }
    }
}