export default function Signup (){

    return(
        <div className="sign-up">

            <h4>회원가입</h4>
            <form action="api/signup" method="post">
                <input type="text"  name="id" placeholder="아이디"/>
                <input type="password" name="password" placeholder="비밀번호"/>
                <button type="submit">버튼</button>
            </form>
            
        </div>
    )


}