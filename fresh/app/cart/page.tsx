import Data from "./data"

export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
            <CartItem />
            <CartItem/>
            <Data></Data>
      <ColorBtn color={"red"}/>
      <ColorBtn color={"blue"}/>
      
            
      </div>
    )
  } 


  const ColorBtn = (props:any)=>{
    return <div style={{background:props.color}}>버튼</div>
  }

  const CartItem = ()=>{
    return(
        <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    )
  }


  // nextjs는 2가지 컴포넌트 존재
// 1. server component (그냥 적은것)
// - html에 자바스크립트 기능 넣기 불가능(ex. onClick)
// - useEffect, useState 등 사용불가
// - 로딩 속도가 빠름, 검색엔진 노출 유리
// - 큰페이지는 서버 컴포넌트 유리

// 2. client component (파일 '맨위'에 'use client'라 적은것)
// - html에 자바스크립트 기능 넣기 가능
// - useEffect, useState 등 가능
// 로딩 속도 느리고, hydration 과정때매 로딩 또 느림
// hydration: html을 유저에게 보낸후에 자바스크립트로 html 다시 일고 분석하는일 
// 기능들이 필요한 곳만 클라이언트

// nextjs 에선 같은 데이터요청이 여러개명 1개로 압축해주는 deduplication 기능이 존재