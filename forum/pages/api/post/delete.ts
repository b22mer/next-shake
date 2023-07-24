import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req:any, res:any){

    
    if(req.method ==='POST'){
 

    
        try {
            let client = await connectDB;
            const db = client.db('forum');
            await db.collection('post').deleteOne({_id: new ObjectId(req.body)})
            return  res.status(200).redirect(302,'/list')
        } catch (error) {
            console.log(error);
            
        }
    }
}