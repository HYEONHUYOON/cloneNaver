import '../../../../css/Body/body-left-news.scss'
import React, { useEffect, useState } from 'react'

function SelectBar({ChangeState}){
    const [isStand,setIsStand] = useState(true);
    const [isEdit,setIsEdit] = useState(false);
    const [isEnter,setIsEnter] = useState(false);
    const [isSports,setIsSports] = useState(false);
    const [isEconomic,setIsEconomic] = useState(false);

    const [isStandHover,setStandHover] = useState(false);
    const [isEditHover,setEditHover] = useState(false);
    const [isEnterHover,setIsEnterHover] = useState(false);
    const [isSportsHover,setIsSportsHover] = useState(false);
    const [isEconomicHover,setIsEconomicHover] = useState(false);

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
            <ul id = 'selectBox'>
                <li className='seeStyle'>
                        <span id ='underLine'>
                            <p
                                style={{color : isStand ? 'black' : null}} 
                                className= {isStandHover ? 'hover-true' : 'hover-false'}
                                onMouseEnter={()=>{setStandHover(true)}}
                                onMouseLeave={()=>{setStandHover(false)}}
                                onClick={
                                    ()=>{ initState(prevState); setPrevState('Stand'); setIsStand(true); ChangeState('Stand')}
                                }>뉴스스탠드
                            </p> 

                            <p
                                id ='edit' 
                                style={{color : isEdit ? 'black' : null}} 
                                className= {isEditHover ? 'hover-true' : 'hover-false'}
                                onMouseEnter={()=>{setEditHover(true)}}
                                onMouseLeave={()=>{setEditHover(false)}}
                                onClick={
                                    ()=>{ initState(prevState); setPrevState('Edit'); setIsEdit(true); ChangeState('Edit')}
                                }>언론사편집
                            </p> 
                        </span>
                </li>

                <li id ='slash' 
                    style={{color : isEnter ? 'black' : null}} 
                    className= {isEnterHover ? 'hover-true' : 'hover-false'}
                    onMouseEnter={()=>{setIsEnterHover(true)}}
                    onMouseLeave={()=>{setIsEnterHover(false)}}
                    onClick={()=>{ initState(prevState); setPrevState('Enter'); setIsEnter(true); ChangeState('Enter')
                }}>엔터</li>

                <li id ='slash' 
                    style={{color : isSports ? 'black' : null}} 
                    className= {isSportsHover ? 'hover-true' : 'hover-false'}
                    onMouseEnter={()=>{setIsSportsHover(true)}}
                    onMouseLeave={()=>{setIsSportsHover(false)}}
                    onClick={()=>{ initState(prevState); setPrevState('Sports'); setIsSports(true); ChangeState('Sports')
                }}>스포츠</li>

                <li id ='slash' 
                    style={{color : isEconomic ? 'black' : null}} 
                    className= {isEconomicHover ? 'hover-true' : 'hover-false'}
                    onMouseEnter={()=>{setIsEconomicHover(true)}}
                    onMouseLeave={()=>{setIsEconomicHover(false)}}
                    onClick={()=>{ initState(prevState); setPrevState('Economic'); setIsEconomic(true); ChangeState('Economic')
                }}>경제</li>
            </ul >
    )
}

export default SelectBar;