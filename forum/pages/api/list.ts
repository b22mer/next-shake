import { connectDB } from "@/src/util/database";

export default async function handler(req:any, res:any){

    //과제1. 
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();

    res.status(200).json(result);
}