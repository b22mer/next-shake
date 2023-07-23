'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DetailLink =()=>{
    const router= useRouter();
    let a = usePathname();
    let b = useSearchParams();
    return(
        <button onClick={()=>{router.push("/")}}>버튼</button>
        // push : 해당경로
        // back : 뒤로
        // forward : 앞으로
        // refresh : 새로고침(소프트 새로고침, 변동일부부만 바꿔줌)
        // prefetch : 페이지 미리 로드 (Link 태그는 이미 프리페치기능 내장) ,prefetch={false}
    )
}
export default DetailLink;