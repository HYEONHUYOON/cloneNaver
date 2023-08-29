import '../../../../css/Body/body-left-news.scss'
import { useEffect, useState } from 'react';

import SelectBar from './select-Top-Bar';
import MiddleBar from './middle-Bar';
import MiddleContent from './middle-Content';
import FootBar from './foot-bar';

function News(){
    const [state,setState] = useState('Stand');
    const [pageNum,setPageNum] = useState(1);

    const upOption = (maxPage,nextPage) =>{
        if(pageNum < maxPage)
            setPageNum(pageNum+1)
        else if(pageNum === maxPage){
            setState(nextPage);
            setPageNum(1);
        }
    }

    const downOption = (maxPage,prevPage) =>{
        if(pageNum !== 1)
            setPageNum(pageNum-1)
        else {
            setState(prevPage);
            setPageNum(maxPage);
        }
    }

    function pageInit(){
        setPageNum(1);
    }

    function pageUp(){
        switch(state){
            case 'Stand' : 
                upOption(4,'Edit')
            break;

            case 'Edit' : 
                upOption(3,'Enter')
            break;

            case 'Enter' :
                upOption(2,'Sports')
            break;

            case 'Sports' :
                upOption(6,'Economic')
            break;

            case 'Economic' : 
                upOption(2,'Stand')
            break;

            default : break;
        }
    }

    function pageDown(){
        switch(state){
            case 'Stand' : 
                downOption(2,'Economic');
            break;

            case 'Edit' : 
                downOption(4,'Stand');
            break;

            case 'Enter' :
                downOption(3,'Edit');
            break;

            case 'Sports' :
                downOption(2,'Enter');
            break;

            case 'Economic' : 
                downOption(6,'Sports');
            break;

            default : break;
        }
    }

    useEffect(()=>{
        //setState('Stand')
    })

    return(
        <div className = 'News'>
            <SelectBar ChangeState = {setState} pageInit = {pageInit} state = {state}/>
            <MiddleBar state = {state}/>
            <MiddleContent state = {state}/>
            <hr id = 'line'/>
            <FootBar state ={state} pageNum = {pageNum} pageUp = {pageUp} pageDown = {pageDown}/>
        </div>
    )
}

export default News;