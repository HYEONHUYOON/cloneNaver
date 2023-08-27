import '../../../../../css/Body/body-left-news.scss'
import React, { useState } from 'react'

function Enter(){
    const [NowHover,setNowHover] = useState(false);
    const [TvHover,setTvHover] = useState(false);
    const [OnHover,setOnHover] = useState(false);
    const [VibeHover,setVibeHover] = useState(false);
    const [homeHover,sethomeHover] = useState(false);

    return(
        <ul>
                <ii id ='selects'>                    
                    <a href=' ' className = {NowHover ? 'hover-true':'hover-false'}
                        onMouseEnter={()=>{setNowHover(true)}} 
                        onMouseLeave={()=>{setNowHover(false)}}
                    >NOW</a>
                </ii>

                <ii id = 'selects'>
                    <a href=' ' className = {TvHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setTvHover(true)}} 
                        onMouseLeave={()=>{setTvHover(false)}}
                    ><b>네이버TV</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {OnHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setOnHover(true)}} 
                        onMouseLeave={()=>{setOnHover(false)}}
                    ><b>시리즈온</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {VibeHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setVibeHover(true)}} 
                        onMouseLeave={()=>{setVibeHover(false)}}
                        style = {{marginRight : 481}}
                    ><b>VIBE</b></a>
                </ii>

                <a href=' ' className = {homeHover ? 'hover-true':'hover-false'}
                        onMouseEnter={()=>{sethomeHover(true)}} 
                        onMouseLeave={()=>{sethomeHover(false)}}
                ><b>연예홈</b></a>
            </ul>
    )
}

export default Enter;