import '../../css/Header/header.scss'
import React, { useState } from 'react' 

function IconPanel({content}){

    return (
        <div id = 'iconPanel'>
            <div className='panel-Box'>
                <p><b>{content}</b></p>
            </div>
            <div className = 'panel-Arrow'></div>
        </div>
    )
}

export default IconPanel;