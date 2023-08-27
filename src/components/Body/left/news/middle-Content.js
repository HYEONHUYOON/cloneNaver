import '../../../../css/Body/body-left-news.scss'
import Stand from './midde-Contents-Modules/stand'
import Edit from './midde-Contents-Modules/edit'
import Enter from './midde-Contents-Modules/enter'
// import Sports from './middle-Contents-Modules/sports'
// import Economic from './middle-Contents-Modules/economic'

import React, { useState } from 'react'

function MiddleContent(props){
    const Greeting = (props)=>{
        switch(props){
            case 'Stand' : return <Stand/>;
            case 'Edit' : return <Edit/>;
            case 'Enter' : return <Enter/>;
            // case 'Sports' : return <Sports/>;
            // case 'Economic' : return <Economic/>;
            default : break;
        }
    }

    return(
        <div id = 'middle-Content'>
            {
                Greeting(props.state)
            }
        </div>
    )
}

export default MiddleContent;