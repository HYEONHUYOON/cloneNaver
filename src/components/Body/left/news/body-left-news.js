import '../../../../css/Body/body-left-news.scss'
import SelectBar from './select-Top-Bar';
import MiddleBar from './middle-Bar';
import { useEffect, useState } from 'react';
import MiddleContent from './middle-Content';

function News(){
    const [state,setState] = useState('Stand');

    useEffect(()=>{
        //setState('Stand')
    })

    return(
        <div className = 'News'>
            <SelectBar ChangeState = {setState}/>
            <MiddleBar state = {state}/>
            <MiddleContent state = {state}/>
        </div>
    )
}

export default News;