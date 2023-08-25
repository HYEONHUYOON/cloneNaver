import '../../css/Body/body-left-news.scss'
import React, { useEffect, useState } from 'react'

function News(){
    const [isStand,setIsStand] = useState(true);
    const [isEdit,setIsEdit] = useState(false);
    const [isEnter,setIsEnter] = useState(false);
    const [isSports,setIsSports] = useState(false);
    const [isEconomic,setIsEconomic] = useState(false);

    const [prevState,setPrevState] = useState('Stand');

    const initState = (state) =>{
        switch(state){
            case 'Stand' : setIsStand(false); break;
            case 'Edit' : setIsEdit(false); break;
            case 'Enter' : setIsEnter(false); break;
            case 'Sports' : setIsSports(false); break;
            case 'Economic' : setIsEconomic(false); break;
            default:break;
        }
    }

    return(
        <div className = 'News'>
            <ul id = 'selectBox'>
                <li className='seeStyle'>
                        <span id ='underLine'>
                            <a style={{color : isStand ? 'black' : null}} onClick={()=>{initState(prevState); setPrevState('Stand'); setIsStand(true); }}>뉴스스탠드</a> 
                            <a id ='edit' style={{color : isEdit ? 'black' : null}} onClick={()=>{initState(prevState); setPrevState('Edit'); setIsEdit(true);}}>언론사편집</a> 
                        </span>
                </li>

                <li id ='slash' style={{color : isEnter ? 'black' : null}} 
                    onClick={()=>{initState(prevState); 
                    setPrevState('Enter'); 
                    setIsEnter(true);
                }}><a>엔터</a></li>

                <li id ='slash' style={{color : isSports ? 'black' : null}} 
                    onClick={()=>{initState(prevState); 
                    setPrevState('Sports'); 
                    setIsSports(true); 
                }}><a>스포츠</a></li>

                <li id ='slash' style={{color : isEconomic ? 'black' : null}} 
                    onClick={()=>{initState(prevState); 
                    setPrevState('Economic'); 
                    setIsEconomic(true); 
                }}><a>경제</a></li>
            </ul >
        </div>
    )
}

export default News;