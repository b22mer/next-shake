import Link from "next/link";

export default function Header() {
    return (
      <div className='Header'>
        <h4 className="header-title"><Link href={"/"}>비머스토리</Link></h4>
        <ul className="header-list">
            <li><Link href={"/notice"}>공지사항</Link></li>
            <li><Link href={"/welcome"}>방명록</Link></li>
            <li><Link href={"/qna"}>문의사항</Link></li>
            <li><Link href={"/write"}>글 쓰기</Link></li>
        </ul>
      </div>
    )
  }
  