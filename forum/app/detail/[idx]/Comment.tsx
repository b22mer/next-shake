'use client'

import { useEffect, useState } from "react"

export default function Comment(props:any){

    let [comment, setComment] = useState("");
    let [commentList, setCommentList] = useState([]);
    
    useEffect(()=>{
        fetch('/api/comment/list?id='+ props._id).then(r=> r.json()).then((res)=>{
            setCommentList(res);
        })
    },[commentList])

    return(
        <div>
        <div className="com-title">댓글목록</div>
        {commentList.map((it:any)=>{
            return(
                <p className="com-content" key={it._id}>
                    {it.comment} 
                </p>
            )
        })}
        <input onChange={(e)=>{setComment(e.target.value)}}/>
        <button onClick={()=>{
            console.log(comment);
            fetch('/api/comment/new', {method:"POST", body: JSON.stringify({comment: comment, _id:props._id})});
        }}>댓글전송</button>
      </div>
    )
}