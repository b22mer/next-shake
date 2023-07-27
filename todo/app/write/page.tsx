export default function Write() {
    return (
        <div className="write-box">
            <h4>글 작성</h4>
            <form className="write-form" action="/api/write" method="post">
                <div><input type="text" name="title" placeholder="글 제목" /></div>
                <div><textarea name="content" placeholder="글 내용"></textarea></div>
                <button type="submit">쓰기</button>
            </form>
        </div>
    )
}