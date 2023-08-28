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
                content={`'♥김연아' 고우림 "남편으로서 좋은 점? 술 · 담배 · 친구 NO" (`} date ='22분전' officeName={'엑스포츠뉴스'} iconNum = {7}/>
            </div>
            <div id= 'content-down'>
                <ContentBox thumb = {thumbsFiles[1]} index={1}
                content={`안재현 파양→이민 결심..강부자, 정의제에 "하늘이 포기해줘" `} date ='45분전' officeName={'OSEN'} iconNum = {9}/>
            </div>
        </div>
        <div id='content-right'>
            <ul>
                <li><ContentList content = {`영화 '치악산' 제목 논란에도 31일 시사회 강행 [스타이슈]`} index={0} officeName ='스타뉴스' iconNum = {9}/></li>
                <li><ContentList content = {`'하늘의 인연' 김유석, 박현숙 매수→전혜연x서한결 홈쇼핑 불발 위기(종합)`} index={1} officeName ='뉴스1' iconNum = {8}/></li>
                <li><ContentList content = {`비비, 송중기와 영화 '화란' 칸 입성 언급 "연기 재능 없다"(피식대학)[종합]`} index={2} officeName ='스포츠조선' iconNum = {6}/></li>
                <li><ContentList content = {`"금덩이"·"중고차 상당 현금"…노라조→다듀, 결혼식서 증명한 멤버애 [엑's 이슈]`} index={3} officeName ='엑스포츠뉴스' iconNum = {5}/></li>
                <li><ContentList content = {`"뚝뚝 흘러내려 Slay"‥NCT 7년을 담아 연 골든 에이지 '배기 진스' [팝's신곡]`} index={4} officeName ='헤럴드POP' iconNum = {3}/></li>
                <li><ContentList content = {`[단독] "3가지 이유, 인정되지 않는다"…'피프티 피프티', 가처분 기각`} index={5} officeName ='디스패치' iconNum = {4}/></li>
            </ul>
        </div>
    </div>
    )
}

export default Enter;