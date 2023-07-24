import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";



export default async function Edit(props:any){

    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.idx)});
  


    return(
        <div className="p-20">
            <h4>글 수정</h4>
            <form action="/api/post/edit" method="POST">
                <input type="text" name="title" defaultValue={result?.title} />
                <input type="text" name="content" defaultValue={result?.content} />
                <input style={{display:"none"}} type="text" name="_id" defaultValue={result?._id.toString()} />
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}


