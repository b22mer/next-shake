import { connectDB } from "@/src/util/database";

export default async function handler(req:any, res:any){



    const client = await connectDB;
    const db= client.db('forum');
    let result = await db.collection('post').insertOne(req.body);
    
    console.log(result);
    

    return  res.status(200).redirect(302,'/')
    

}