import '../../../../../css/Body/body-left-news.scss'
import React, { useState } from 'react'

function Enter(){
    const [BaseBallHover,setBaseBallHover] = useState(false);
    const [FBaseBallHover,setFBaseBallHover] = useState(false);
    const [SoccorHover,setSoccorHoverHover] = useState(false);
    const [FSoccorHover,setFSoccorHoverHover] = useState(false);
    const [BasketBallHover,setBasketBallHover] = useState(false);
    const [VollyBallHover,setVollyBallHover] = useState(false);
    const [GolfHover,setGolfHover] = useState(false);
    const [NormalHover,setNormalHover] = useState(false);
    const [EsportsHover,setEsportsHover] = useState(false);
    const [CommunityHover,setCommunityHover] = useState(false);
    const [homeHover,sethomeHover] = useState(false);

    return(
        <ul>
                <ii id ='selects'>                    
                    <a href=' ' className = {BaseBallHover ? 'hover-true':'hover-false'}
                        onMouseEnter={()=>{setBaseBallHover(true)}} 
                        onMouseLeave={()=>{setBaseBallHover(false)}}
                    >야구</a>
                </ii>

                <ii id = 'selects'>
                    <a href=' ' className = {FBaseBallHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setFBaseBallHover(true)}} 
                        onMouseLeave={()=>{setFBaseBallHover(false)}}
                    ><b>해외야구</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {SoccorHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setSoccorHoverHover(true)}} 
                        onMouseLeave={()=>{setSoccorHoverHover(false)}}
                    ><b>축구</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {FSoccorHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setFSoccorHoverHover(true)}} 
                        onMouseLeave={()=>{setFSoccorHoverHover(false)}}
                    ><b>해외축구</b></a>
                </ii>
                
                <ii id ='selects'>
                    <a href=' ' className = {BasketBallHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setBasketBallHover(true)}} 
                        onMouseLeave={()=>{setBasketBallHover(false)}}
                    ><b>농구</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {VollyBallHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setVollyBallHover(true)}} 
                        onMouseLeave={()=>{setVollyBallHover(false)}}
                    ><b>배구</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {GolfHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setGolfHover(true)}} 
                        onMouseLeave={()=>{setGolfHover(false)}}
                    ><b>N골프</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {NormalHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setNormalHover(true)}} 
                        onMouseLeave={()=>{setNormalHover(false)}}
                    ><b>일반</b></a>
                </ii>

                <ii id ='selects'>
                    <a href=' ' className = {EsportsHover ? 'hover-true':'hover-false'}
                        id = 'dot' 
                        onMouseEnter={()=>{setEsportsHover(true)}} 
                        onMouseLeave={()=>{setEsportsHover(false)}}
                        style = {{marginRight : 175}}
                    ><b>e스포츠</b></a>
                </ii>
                <ii>
                    <a href=' ' className = {CommunityHover ? 'hover-true':'hover-false'}
                        id = '' 
                        onMouseEnter={()=>{setCommunityHover(true)}} 
                        onMouseLeave={()=>{setCommunityHover(false)}}
                    >커뮤니티</a>

                    <a href=' ' className = {homeHover ? 'hover-true':'hover-false'}
                        id = 'officeName' 
                        onMouseEnter={()=>{sethomeHover(true)}} 
                        onMouseLeave={()=>{sethomeHover(false)}}
                    ><b>스포츠홈</b></a>
                </ii>
            </ul>
    )
}

export default Enter;