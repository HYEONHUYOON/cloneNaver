import '../../css/Body/body.scss'
import React from 'react'

function Login(){
    return(
        <div className = 'Login'>
            <p><b>네이버를 더 안전하고 편리하게 이용하세요</b></p>
            <button className='login-Button'>
                <p className ='Naver-font'>NAVER</p>{"로그인"}
            </button>
            <div className ='login-Options'>
                <a>아이디 찾기</a>
                <a>비밀번호 찾기</a>
                <a>회원가입</a>
            </div>
        </div>
    )
}

export default Login;