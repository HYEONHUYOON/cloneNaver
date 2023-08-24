import '../../css/Header/header.scss'
import IconPanel from './header-bar-iconPanel.js';
import React, { useState } from 'react' 

function Bar(){
    const [barHover,setBarHover] = useState(false);
    const [PayHover,setPayHover] = useState(false);
    const [bellHover,setBellHover] = useState(false);
    const [talkHover,setTalkHover] = useState(false);

    return(
        <div className = 'bar'>

               <div id = 'shortCut' onMouseEnter = {()=>{setBarHover(true)}} onMouseLeave = {()=> {setBarHover(false)}}>
                    {barHover ? 
                        <div className='shortCut-Button'>
                            <IconPanel content = '바로가기'/>
                        </div> : 
                        <div className='shortCut-Button'></div>
                    }
               </div>

               <div id = 'naverPay' onMouseEnter = {()=>{setPayHover(true)}} onMouseLeave = {()=> {setPayHover(false)}}>
                    {PayHover 
                        ? 
                        <div href = '' className='naverPay-Button'>
                            <IconPanel content = '네이버 페이'/>
                        </div> : 
                        <div href = '' className='naverPay-Button'></div>
                    }
               </div>

               <div id = 'naverTalk' onMouseEnter = {()=>{setBellHover(true)}} onMouseLeave = {()=> {setBellHover(false)}}>
                    {bellHover 
                        ? 
                        <div className='naverTalk-Button'>
                            <IconPanel content = '네이버 톡'/>
                        </div> : 
                        <div className='naverTalk-Button'></div>
                    }
               </div>

               <div id = 'bell' onMouseEnter = {()=>{setTalkHover(true)}} onMouseLeave = {()=> {setTalkHover(false)}}>
                    {talkHover 
                        ? 
                        <div className='bell-Button'>
                            <IconPanel content = '알림 ・ 혜택'/>
                        </div> : 
                        <div className='bell-Button'></div>
                    }
               </div>
        </div>
    )
}

export default Bar;