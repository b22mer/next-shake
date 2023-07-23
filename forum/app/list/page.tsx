import { connectDB } from "@/src/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
export default async function List() {

    //promise 반환하는것만 await 붙이기가능
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();
    // console.log(result);
    // map 쓸때 return을 생략하고싶을땐 중괄호도 생략을 진행해야한다.
    return (
      <div className="list-bg">
        {result.map((it, idx)=>{
            return(
                <div className="list-item" key={idx}>
                <Link href={`/detail/${it._id}`}> {it.title} </Link>
                {/* <DetailLink/> */}
           
                <p>{it.content}</p>
              </div>
            )
        })}
 

      </div>
    )
  } 