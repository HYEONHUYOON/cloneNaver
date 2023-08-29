import '../../../../../css/Body/body-left-news.scss'
import React, { useState } from 'react'

function Sports({pageNum,pageUp,pageDown}){
    const pageNumMax = 6;

    return(
        <div>
            <button id = 'button-shape' className='left-Button' onClick={pageDown}/>
            <div id = 'text-Box'>
            <p className='font-Pink'>스포츠 소식</p> <p className='font-DarkGray'>더보기 {pageNum}</p><p className='font-Gray'>/{pageNumMax}</p>
            </div>
            <button id = 'button-shape' className='right-Button' onClick={pageUp}/>
        </div>
    )
}

export default Sports;