import '../../../../css/Body/body-left-news.scss'
import Stand from './middle-Bar-Modules/stand'
import Edit from './middle-Bar-Modules/edit'
import Enter from './middle-Bar-Modules/enter'
import Sports from './middle-Bar-Modules/sports'
import Economic from './middle-Bar-Modules/economic'

import React, { useState } from 'react'

function MiddleBar(props){
    const Greeting = (props)=>{
        switch(props){
            case 'Stand' : return <Stand/>;
            case 'Edit' : return <Edit/>;
            case 'Enter' : return <Enter/>;
            case 'Sports' : return <Sports/>;
            case 'Economic' : return <Economic/>;
            default : break;
        }
    }

    return(
        <div id = 'middle-Bar'>
            {
                Greeting(props.state)
            }
        </div>
    )
}

export default MiddleBar;