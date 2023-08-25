import '../../css/Body/body.scss'
import React from 'react'

import TopAdv from './body-left-top-adv';
import Login from './body-login';

function Body(){
    return(
        <div className = 'body'>
            <div id= 'left-Body'>
                <TopAdv/>
            </div>

            <div id = 'right-Body'>
                <Login/>
            </div>   
        </div>
    )
}

export default Body;