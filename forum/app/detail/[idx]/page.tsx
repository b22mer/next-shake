import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail (props:any){
    

    let client = await connectDB
    const db = client.db('forum');
    // let result = await db.collection('post').findOne({title: "안녕"}) // title이 안녕인 doc을 가져다 달라
    let result:any = await db.collection('post').findOne({_id: new ObjectId(props.params.idx)});
    // console.log(props.params.idx);

    return(
        <div>
            <h4>상세 페이지</h4>
            <h4 >{result.title}</h4>
            <p>{result.content}</p>
            <Comment _id={result._id.toString()}/>
        </div>
    )
}