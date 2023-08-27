import '../../css/Body/body.scss'
import React from 'react'

import TopAdv from './left/adv/body-left-top-adv';
import Login from './right/login/body-login';
import RightAdv from './right/adv/body-right-adv';
import News from './left/news/body-left-news'

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