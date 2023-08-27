import '../../../../../css/Body/body-left-news.scss'
import React, { useEffect, useState } from 'react'

const ContentBox = ({index,thumb,icon,content,date,officeName}) =>{
    const [officeNameHover,setOfficeNameHover] = useState(-1);
    const [contentHover,setContentHover] = useState(-1);
    return(
        <div id = 'frame'>
            <a>
                <span id='img-Box'>
                    <img key={index} src = {thumb} alt='썸네일' class="news_logo"/>
                </span>
            </a>
            <div id ='content-Box'>
                <div id ='content' className={contentHover === index ?'hover-true':'hover-false'} 
                    onMouseEnter={()=>{setContentHover(index)}} 
                    onMouseLeave={()=>{setContentHover(-1)}}><p>{content}</p>
                </div>
                <div id = 'inform'>
                    <p>{officeName}</p><p id='date' className='dot'>{date}</p>
                    <div id ='icon'>
                        <span className='num'>6</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Enter(){
    const [isHover,setIsHover] = useState(-1);

    const thumbs = require.context('../../../../../images/body/news/enter/thumbs', false, /\.(jpeg)$/);
    const thumbsFiles = thumbs.keys().map(thumbs);

    useEffect(()=>{
    })

    return(
    <div id='enter'>
        <div id='content-left'>
            <div id= 'content-up'>
                <ContentBox thumb = {thumbsFiles[0]} index={0}
                content={`'♥김연아' 고우림 "남편으로서 좋은 점? 술·담배·친구 NO" (...`} date ='22분전' officeName={'엑스포츠뉴스'}/>
            </div>
            <div id= 'content-down'>
                <ContentBox thumb = {thumbsFiles[1]} index={1}
                content={`안재현 파양→이민 결심..강부자, 정의제에 "하늘이 포기해줘" `} date ='45분전' officeName={'OSEN'}/>
            </div>
        </div>
        <div id='content-right'>
            
        </div>
    </div>
    )
}

export default Enter;