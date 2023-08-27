import '../../../../../css/Body/body-left-news.scss'
import React, { useState } from 'react'

function Enter(){
    const [koreaHover,setKoreaHover] = useState(false);
    const [worldHover,setWorldHover] = useState(false);
    const [marketHover,setMarketHover] = useState(false);
    const [favoriteHover,setFavoriteHover] = useState(false);
    const [home1Hover,sethome1Hover] = useState(false);
    const [home2Hover,sethome2Hover] = useState(false);

    return(
        <ul>
                <ii id ='selects'>                    
                    <a href=' ' className = {koreaHover ? 'hover-true':'hover-false'}
                        onMouseEnter={()=>{setKoreaHover(true)}} 
                        onMouseLeave={()=>{setKoreaHover(false)}}
                    >국내증시</a>
                </ii>

                <ii id = 'selects'>
                    <a href=' ' className = {worldHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setWorldHover(true)}} 
                        onMouseLeave={()=>{setWorldHover(false)}}
                    ><b>해외증시</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {marketHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setMarketHover(true)}} 
                        onMouseLeave={()=>{setMarketHover(false)}}
                    ><b>시장지표</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {favoriteHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setFavoriteHover(true)}} 
                        onMouseLeave={()=>{setFavoriteHover(false)}}
                        style = {{marginRight : 382}}
                    ><b>관심종목</b></a>
                </ii>

                <ii>
                    <a href=' ' className = {home1Hover ? 'hover-true':'hover-false'}
                        id = '' 
                        onMouseEnter={()=>{sethome1Hover(true)}} 
                        onMouseLeave={()=>{sethome1Hover(false)}}
                    ><b>증권홈</b></a>

                    <a href=' ' className = {home2Hover ? 'hover-true':'hover-false'}
                        id = 'officeName' 
                        onMouseEnter={()=>{sethome2Hover(true)}} 
                        onMouseLeave={()=>{sethome2Hover(false)}}
                    ><b>부동산홈</b></a>
                </ii>
            </ul>
    )
}

export default Enter;