//최적화된 이미지 사용하는 추가
//외부 이미지 주소를 사용할 경우 image태그에 height과 width 필수설정 및 nextconfig에 설정 추가해야함
// import Image from "next/image";
// import 상품 from '/public/food2.png';
'use client'
import { useState } from "react";

export default function List() {
const product = ["banana", 'apple', 'lemon'];
const [num, setNum] = useState(Array.from({length:product.length}, ()=>0));
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
          product.map((it,idx)=>{
            return( 
            <div className="food" key={idx}>
              {/* 이미지 최적화 방법
              1. lazyloading
              2. 사이즈 최적화
              3. layout shift 방지 (이미지 로딩전에 막 폰트 밀리는것)
              */}
              <img src={`/food${idx+1}.png`} className="food-img"  alt="product"/>
            <h4>{it} $40</h4>
              <span> {num[idx]} </span>
              <button onClick={()=> {
                const copy = [...num];
                copy[idx]++;
                setNum(copy)
              }}>+</button>
            </div>)
          })
        }
      </div>
    )
  }
  