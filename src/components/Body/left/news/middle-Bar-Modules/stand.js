import '../../../../../css/Body/body-left-news.scss'
import React, { useState } from 'react'

function Stand(){
    const [officeNameHover,setOfficeNameHover] = useState(false);
    const [contentHover,setContentHover] = useState(false);
    const [titleHover,settitleHover] = useState(false);
    const [homeHover,sethomeHover] = useState(false);

    return(
        <ul>
                <ii id ='underLine'>
                    <span id ='selects' >
                        전체언론사<i id ='triangle-Icon'></i>
                    </span>
                </ii>
                <ii>
                    <a href = ' ' 
                        className = {officeNameHover ? 'hover-true':'hover-false'}
                        id = 'officeName' 
                        onMouseEnter={()=>{setOfficeNameHover(true)}} 
                        onMouseLeave={()=>{setOfficeNameHover(false)}}
                    >연합뉴스</a>
                    
                    <a href=' ' className = {contentHover ? 'hover-true':'hover-false'}
                        id = 'stand-content' 
                        onMouseEnter={()=>{setContentHover(true)}} 
                        onMouseLeave={()=>{setContentHover(false)}}
                        style={{marginRight : 106}}
                    >日수산청 "오염수 방류 후 첫 물고기 검사서 삼중수소 안 나와"</a>
                </ii>
                <ii>
                    <a href=' ' className = {titleHover ? 'hover-true':'hover-false'}
                        onMouseEnter={()=>{settitleHover(true)}} 
                        onMouseLeave={()=>{settitleHover(false)}}
                    >뉴스스탠드</a>

                    <a href=' ' className = {homeHover ? 'hover-true':'hover-false'}
                        id = 'officeName' 
                        onMouseEnter={()=>{sethomeHover(true)}} 
                        onMouseLeave={()=>{sethomeHover(false)}}
                    ><b>뉴스홈</b></a>
                </ii>
        </ul>
    )
}

export default Stand;