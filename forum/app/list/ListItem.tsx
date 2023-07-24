'use client'

import { WithId } from "mongodb";
import Link from "next/link"
import React from "react";
import { FourmItem } from "./page";

//async 사용하지마라...
export default function ListItem(props: {list: FourmItem[]}){
//props {result} 이렇게 받으면 생략가능

    // const deleteHandler=(idx: any)=>{
    //     fetch('/api/post/delete', {
    //         method:"POST",
    //         body: idx,
    //     }).then(()=>{
    //         console.log("성공");
    //     })

    // }
    return (
      <div>
        {props.list.length && props.list.map(({_id, title, content}, i)=>{
            return(
                <div className="list-item" key={i}>
                <Link href={`/detail/${_id}`}> <h4> {title}</h4> </Link>
                <Link href={`/edit/${_id}`}> 수정 </Link>
                <span onClick={()=>{
                   fetch('/api/post/delete', {
                    method:"POST",
                    body: _id,
                }).then(()=>{
                    console.log("성공");
                })
                }}>삭제</span>
                <p>{content}</p>
              </div>
            )
        })}

      </div>
    )
  } 