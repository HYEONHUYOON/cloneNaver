import '../../../../../css/Body/body-left-news.scss'
import React, { useEffect, useState } from 'react'

const ContentBox = ({index,thumb,icon,content,date,officeName,iconNum}) =>{
    const [officeNameHover,setOfficeNameHover] = useState(-1);
    const [contentHover,setContentHover] = useState(-1);
    return(
        <div id = 'content-Box-frame'>
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
                    <a href=' '>
                    <div id ='icon'>
                        <span className='num'>{iconNum}</span>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

const ContentList = ({content,index,officeName,iconNum})=>{
    const [contentHover,setContentHover] = useState(-1);
    return(
        <div id = 'content-List-frame'>
            <a href = ' ' id = 'content' className={contentHover === index ?'hover-true':'hover-false'} 
                    onMouseEnter={()=>{setContentHover(index)}} 
                    onMouseLeave={()=>{setContentHover(-1)}}>{content}
            </a>
            <div id ='officeName'>{officeName}</div>
            <div id = 'iconBox'>
                <a href=' '>
                <div id ='icon'>
                    <span className='num'>{iconNum}</span>
                </div>
                </a>
            </div>
        </div>
    )
}

function Sports(){
    const [isHover,setIsHover] = useState(-1);

    const thumbs = require.context('../../../../../images/body/news/sports/thumbs', false, /\.(jpeg)$/);
    const thumbsFiles = thumbs.keys().map(thumbs);

    useEffect(()=>{
    })

    return(
    <div id='sports'>
        <div id='content-left'>
            <div id= 'content-up'>
                <ContentBox thumb = {thumbsFiles[0]} index={0}
                content={`'포스트 서튼 시대' 남은 36경기 -5, '오늘의 롯데와 내일의 롯데' 이종운 체제 투트랙 시험대`} date ='22분전' officeName={'스포츠조선'} iconNum = {7}/>
            </div>
            <div id= 'content-down'>
                <ContentBox thumb = {thumbsFiles[1]} index={1}
                content={`안재현 파양→이민 결심..강부자, 정의제에 "하늘이 포기해줘"`} date ='45분전' officeName={'인터풋볼'} iconNum = {9}/>
            </div>
        </div>
        <div id='content-right'>
            <ul>
                <li><ContentList content = {`여자농구 우리은행·KB, 박신자컵 3연승 질주…4강 확보(종합)`} index={0} officeName ='연합뉴스' iconNum = {9}/></li>
                <li><ContentList content = {`‘부상’ 이강인, 클린스만호 제외… 황희찬·조규성은 선발`} index={1} officeName ='세계일보' iconNum = {8}/></li>
                <li><ContentList content = {`다시, 셔틀콕… 황금시대!`} index={2} officeName ='세계일보' iconNum = {6}/></li>
                <li><ContentList content = {`e스포츠 '초대 챔피언'을 향해…'페이커'가 뜬다!`} index={3} officeName ='SBS' iconNum = {5}/></li>
                <li><ContentList content = {`[442.live] 대전에서 뛰는 그 마음으로...'스토크행 임박' 배준호, 원하는 등번호는 '33번'`} index={4} officeName ='포포투' iconNum = {3}/></li>
                <li><ContentList content = {`'강이슬 16득점' KB스타즈·'박지현 30득점' 우리은행 2023 박신자컵 3연승→4강 진출 나란히 확정 (종합)`} index={5} officeName ='스타뉴스' iconNum = {4}/></li>
            </ul>
        </div>
    </div>
    )
}

export default Sports;