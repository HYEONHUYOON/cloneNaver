import '../../../../../css/Body/body-left-news.scss'
import React, { useState } from 'react'

function Edit(){
    const [officeNameHover,setOfficeNameHover] = useState(false);
    const [contentHover,setContentHover] = useState(false);
    const [titleHover,settitleHover] = useState(false);
    const [homeHover,sethomeHover] = useState(false);

    return(
        <ul>
                <ii id ='underLine'>
                    <span id ='selects'>
                        {"분야별 뉴스"}<i id ='triangle-Icon'></i>
                    </span>
                </ii>
                <ii>
                    <a href = ' ' 
                        className = {officeNameHover ? 'hover-true':'hover-false'}
                        id = 'officeName' 
                        onMouseEnter={()=>{setOfficeNameHover(true)}} 
                        onMouseLeave={()=>{setOfficeNameHover(false)}}
                    >조선비즈</a>
                    
                    <a href=' ' className = {contentHover ? 'hover-true':'hover-false'}
                        id = 'edit-content' 
                        onMouseEnter={()=>{setContentHover(true)}} 
                        onMouseLeave={()=>{setContentHover(false)}}
                        style={{marginRight : 178}}
                    >NASA·스페이스X, ISS 우주비행사 보내는 ‘크루-7′ 발사 성공"</a>
                </ii>
                <ii>
                    <a href=' ' className = {homeHover ? 'hover-true':'hover-false'}
                        onMouseEnter={()=>{sethomeHover(true)}} 
                        onMouseLeave={()=>{sethomeHover(false)}}
                    ><b>뉴스홈</b></a>
                </ii>
            </ul>
    )
}

export default Edit;