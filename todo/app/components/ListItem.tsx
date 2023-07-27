'use client'
import { connectDB } from "@/src/util/database";
import Link from "next/link";
import { useState } from "react";
import { FourmItem } from "../page";


export default  function ListItem(props: {list: FourmItem[]}) {


    const deleteHandler= (idx: any, e: React.MouseEvent<HTMLLIElement>)=>{
        const targetElement = e.currentTarget.parentElement as HTMLElement;
        fetch("/api/delete", {
            method: "POST",
            body: idx
        }).then((res=>{
            res.json();
        })).then(()=>{
            if(targetElement.parentElement){
                targetElement.parentElement.style.opacity="0";
              setTimeout(()=>{
                targetElement.parentElement? targetElement.parentElement.style.display='none':
                "";
              },1000)
            }
        })


    }
    
    return (
      <div className='ListItem'>
        {

            props.list.length && props.list.map((it:any)=>{
                return(
                    <div className="list-item" key={it._id}>
                        
                        <div className="list-title"> {it.title}</div>
                            <ul className="list-option">
                                <li><Link href={"/edit"}>수정</Link></li>
                                <li onClick={(e)=>deleteHandler(it._id, e)}>삭제</li>
                            </ul>
                    </div>
                )
            })
        }
        
      </div>
    )
  }
  