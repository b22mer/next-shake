import { connectDB } from "@/src/util/database";

export default async function handler(req:any, res:any){

    if(req.method ==='POST'){
        console.log(req.body);
      
        if(req.body.password=="" || req.body.id=="" ){
            return res.status(500).json("빈칸 발생");
        }

        try {
            let client = await connectDB;
            const db = client.db('forum');
            // let result = await db.collection('post').insertOne(req.body)
            // for...of 는 배열의 반복에서 사용되고,
            // for...in은 객체의 반복에서 사용된다.
            let result = await db.collection('post').find().toArray();
     
            return  res.status(200).redirect(302,'/list')
        } catch (error) {
            console.log(error);
            
        }
    }
}