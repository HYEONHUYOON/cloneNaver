import '../../../../../css/Body/body-left-news.scss'
import React, { useEffect, useState } from 'react'

const BlueBox = ({MouseLeave})=>{
    const [isHover,setIsHover] = useState(-1);

    return(
        <div id = 'BlueBox' onMouseLeave={()=>{MouseLeave(-1)}}>
            <a href = ' ' className={isHover === 1 ? 'hover-true':'hover-false'} onMouseEnter={()=>{setIsHover(1)}} onMouseLeave={()=>{setIsHover(-1)}}>구독</a>
            <a href = ' ' id = 'gnbStyle' className={isHover === 2 ? 'hover-true':'hover-false'} onMouseEnter={()=>{setIsHover(2)}} onMouseLeave={()=>{setIsHover(-1)}}>기사보기</a>
        </div>
    )
}

function Stand(){
    const [isHover,setIsHover] = useState(-1);

    const images = require.context('../../../../../images/body/news/stand/news-office-logos', false, /\.(png)$/);

    const imageFiles = images.keys().map(images);

    useEffect(()=>{
    })

    return(
    <div id ='stand'>
        <div id = 'grid'>
            <i className='widthGrid1'></i>
            <i className='widthGrid2'></i>
            <i className='widthGrid3'></i>
            <i className='heightGrid1'></i>
            <i className='heightGrid2'></i>
            <i className='heightGrid3'></i>
            <i className='heightGrid4'></i>
            <i className='heightGrid5'></i>
        </div>
        <div id = 'table'>
            <div>
                {
                    imageFiles.slice(0,6).map((image,index)=>(
                        isHover === index?
                        <BlueBox MouseLeave = {setIsHover}></BlueBox>
                        :
                        <div id = 'office-icon' onMouseEnter={()=>{setIsHover(index)}} onMouseLeave={()=>{setIsHover(-1)}}>
                            <a>
                                <img key={index} src = {image} height="20" alt='언론사' class="news_logo" ></img>
                            </a>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    imageFiles.slice(6,12).map((image,index)=>(
                        isHover === index+6 ?
                        <BlueBox MouseLeave = {setIsHover}></BlueBox>
                        :
                        <div id = 'office-icon' onMouseEnter={()=>{setIsHover(index+6)}} onMouseLeave={()=>{setIsHover(-1)}}>
                            <a>
                                <img key={index} src = {image} height="20" alt='언론사' class="news_logo" ></img>
                            </a>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    imageFiles.slice(12,18).map((image,index)=>(
                        isHover === index+12 ?
                        <BlueBox MouseLeave = {setIsHover}></BlueBox>
                        :
                        <div id = 'office-icon' onMouseEnter={()=>{setIsHover(index+12)}} onMouseLeave={()=>{setIsHover(-1)}}>
                            <a>
                                <img key={index} src = {image} height="20" alt='언론사' class="news_logo" ></img>
                            </a>
                        </div>
                    ))
                }           
            </div>
            <div>
                {
                    imageFiles.slice(18,24).map((image,index)=>(
                        isHover === index+18 ?
                        <BlueBox MouseLeave = {setIsHover}></BlueBox>
                        :
                        <div id = 'office-icon' onMouseEnter={()=>{setIsHover(index+18)}} onMouseLeave={()=>{setIsHover(-1)}}>
                            <a>
                                <img key={index} src = {image} height="20" alt='언론사' class="news_logo" ></img>
                            </a>
                        </div>
                    ))
                }            
            </div>
        </div>
    </div>
    )
}

export default Stand;