import { connectDB } from "@/src/util/database";
import ListItem from "./components/ListItem";


export type FourmItem = {
  _id: string;
  title: string;
  content: string;
}

export default async function Home() {

    //promise 반환하는것만 await 붙이기가능
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();
    const list = result.map((value) => ({...value, _id: value._id.toString()})) as FourmItem[];
    
    // console.log(result);
    // map 쓸때 return을 생략하고싶을땐 중괄호도 생략을 진행해야한다.
    return (
      <div className="home">        
         {!list.length
      ? <div>작성된 글이 없습니다.</div>
      : <ListItem list={list} />}
      </div>
    )
  } 