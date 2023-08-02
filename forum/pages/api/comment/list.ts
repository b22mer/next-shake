import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req:any, res:any){

    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('comment').find({parent: new ObjectId(req.query.id)}).toArray();
    res.status(200).json(result);
}