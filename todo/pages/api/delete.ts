import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
export default async function handler(req:any, res:any){

    const client = await connectDB;
    const db= client.db('forum');
    let result = await db.collection('post').deleteOne({_id: new ObjectId(req.body)})
    

    return  res.status(200).json(result)
    

}