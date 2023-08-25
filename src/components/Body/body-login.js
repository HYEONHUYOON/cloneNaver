import '../../css/Body/body.scss'
import '../../css/Body/body-login.scss'
import React, { useState } from 'react'

function Login(){
    const [loginHover,setLoginHover] = useState(false);

    const [idHover,setIdHover] = useState(false);
    const [pwHover,setPwHover] = useState(false);
    const [SignHover,setSignHover] = useState(false);

    return(
        <div className = 'Login'>
            <p><b>네이버를 더 안전하고 편리하게 이용하세요</b></p>

            <button className = {loginHover ? 'login-Button-Hover' : 'login-Button' } 
                    onMouseEnter = {()=>{setLoginHover(true)}} 
                    onMouseLeave = {()=>{setLoginHover(false)}
            }>
                <p><span className ='Naver-font'>NAVER</span>로그인</p>
            </button>

            <div className ='login-Options'>
                <a href = ' ' id = {idHover ? 'Option-Id-Hover' : 'Option-Id' } 
                    onMouseEnter = {()=>{setIdHover(true)}} 
                    onMouseLeave = {()=>{setIdHover(false)}
                }>아이디 찾기</a>
                
                <a href = ' ' id = {pwHover ? 'Option-Pw-Hover' : 'Option-Pw' } 
                    onMouseEnter = {()=>{setPwHover(true)}} 
                    onMouseLeave = {()=>{setPwHover(false)}
                }>비밀번호 찾기</a>

                <a href = ' ' id = {SignHover ? 'Option-Sign-Hover' : 'Option-Sign' } 
                    onMouseEnter = {()=>{setSignHover(true)}} 
                    onMouseLeave = {()=>{setSignHover(false)}
                }>회원가입</a>
            </div>
        </div>
    )
}

export default Login;