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
                <div id ='bar'>
                    <img id = 'icon' src = {icon} alt='썸네일' class="news_logo"/>
                    <b><p id ='icon-text'  className={officeNameHover === index ?'hover-true':'hover-false'} 
                        onMouseEnter={()=>{setOfficeNameHover(index)}} 
                        onMouseLeave={()=>{setOfficeNameHover(-1)}}>{officeName}</p></b>
                    <button id='subscible-Button'><p>구독+</p></button>
                </div>
                <div id ='content' className={contentHover === index ?'hover-true':'hover-false'} 
                    onMouseEnter={()=>{setContentHover(index)}} 
                    onMouseLeave={()=>{setContentHover(-1)}}><p>{content}</p>
                </div>
                <div id ='date'><p>{date}</p></div>
            </div>
        </div>
    )
}

function Edit(){
    const [isHover,setIsHover] = useState(-1);

    const thumbs = require.context('../../../../../images/body/news/edit/thumbs', false, /\.(jpeg)$/);
    const thumbsFiles = thumbs.keys().map(thumbs);

    const icons = require.context('../../../../../images/body/news/edit/icons', false, /\.(png)$/);
    const iconsFiles = icons.keys().map(icons);

    useEffect(()=>{
    })

    return(
    <div id='edit'>
        <div id='content-left'>
            <div id= 'content-up'>
                <ContentBox thumb = {thumbsFiles[0]} icon = {iconsFiles[0]} index={0}
                content={'장관급 만찬회 장관들끼리 만났음'} date ='08월 27일 20:27' officeName={'경향신문'}/>
            </div>
            <div id= 'content-down'>
                <ContentBox thumb = {thumbsFiles[1]} icon = {iconsFiles[1]} index={1}
                content={'환한 미소'} date ='08월 27일 20:27' officeName={'한국신문'}/>
            </div>
        </div>
        <div id='content-right'>
            <div id= 'content-up'>
                <ContentBox thumb = {thumbsFiles[2]} icon = {iconsFiles[2]} index={2}
                content={'안동 이동삼 선생님의 고등어 밥한끼'} date ='08월 27일 20:27' officeName={'조선일보'}/>
            </div>
            <div id= 'content-down'>
                    <ContentBox thumb = {thumbsFiles[3]} icon = {iconsFiles[3]} index={3}
                    content={'오염수 방류 후 첫 주말, 노량진 수산시장 ‘시민들로 북적’'} date ='08월 27일 20:27' officeName={'고려신문'}/>
            </div>
        </div>
    </div>
    )
}

export default Edit;