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
        </div>
    )
}

const EconomicInform = ({index,name,val,increment}) =>{
    const [contentHover,setContentHover] = useState(-1);
    return(
    <div id = 'economic-Inform'>
            <a href=' ' id = {index === 2 ? 'informs-lastchild':'informs'} className={contentHover === index ?'hover-true':'hover-false'} 
                    onMouseEnter={()=>{setContentHover(index)}} 
                    onMouseLeave={()=>{setContentHover(-1)}}>
                <p id = 'name'>{name}</p>
                <p id = 'value'>{val}</p>
                <span><div id ='incrementBox'>{increment}%</div></span>
            </a>
    </div>
    )
}

function Economic(){
    const [isHover,setIsHover] = useState(-1);

    const thumbs = require.context('../../../../../images/body/news/economic/thumbs', false, /\.(jpeg)$/);
    const thumbsFiles = thumbs.keys().map(thumbs);

    useEffect(()=>{
    })

    return(
    <div id='economic'>
        <div id='content-left'>
            <div id= 'content-up'>
                <ContentBox thumb = {thumbsFiles[0]} index={0}
                content={`‘결혼 긍정적’ 청년 36%…더 낮아져`} date ='11분 전' officeName={'경향신문'} iconNum = {7}/>
            </div>
            <div id= 'content-down'>
                <ContentBox thumb = {thumbsFiles[1]} index={1}
                content={`포스코퓨처엠, 2030년 영업익 3.4조 비전…"시총 100조 가보자"(종합)`} date ='6시간 전' officeName={'연합뉴스'} iconNum = {9}/>
            </div>
        </div>
        <div id='content-right'>
            <div id ='inform-Box'>
                <div><EconomicInform index = {0} name ='코스피' val='2,543.41' increment='+0.96'/></div>
                <div><EconomicInform index = {1} name ='코스닥' val='903.38' increment='+1.11'/></div>
                <div><EconomicInform index = {2} name ='S&P 500' val='4,424.85' increment='+0.43'/></div>
            </div>
            <hr id = 'line'></hr>
            <ul>
                <li><ContentList content = {`[단독]GS건설 영업정지 처분받아도 해외 수주 가능하다`} index={0} /></li>
                <li><ContentList content = {`이자이익 급감, 연체율은 급등…‘울상’ 저축은행'`} index={1} /></li>
                <li><ContentList content = {`정부 “100일간 고강도 ‘민관합동 수입수산물 원산지표시 점검’”`} index={2}/></li>
            </ul>

            <div id ='head-line'>오늘의 경제 헤드라인입니다.</div>
        </div>
    </div>
    )
}

export default Economic;