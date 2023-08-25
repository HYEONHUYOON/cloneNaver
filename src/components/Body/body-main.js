import '../../css/Body/body.scss'
import React from 'react'

import TopAdv from './body-left-top-adv';
import Login from './body-login';
import RightAdv from './body-right-adv';
import News from './body-left-news'

function Body(){
    return(
        <div className = 'body'>
            <div id= 'left-Body'>
                <TopAdv/>
                <News/>
            </div>

            <div id = 'right-Body'>
                <Login/>
                <RightAdv/>
            </div>   
        </div>
    )
}

export default Body;