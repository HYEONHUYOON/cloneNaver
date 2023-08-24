import '../../css/Header/header.scss'
import React, { useState } from 'react'

function SearchArea(){

    const [keyHover,setKeyHover] = useState(false);

    return(
        <div className = 'search'>
            <div className='search-Box'>
                <button className='search-logo'></button>

                <hr className='search-line'></hr>

                <input className='search-input'placeholder='검색어를 입력해주세요.'></input>

                <div onMouseEnter = {()=>{setKeyHover(true)}} onMouseLeave = {()=> {setKeyHover(false)}}>
                    {keyHover ? 
                        <button className = 'search-keyboard-Hover'>
                            <div className='keyboard-Box'>
                                <p>입력도구</p>
                            </div>
                            <div className = 'keyboard-Arrow'></div>
                        </button> 
                        : 
                        <button className = 'search-keyboard'/> 
                    }
                </div>
                <button className = 'search-arrow'></button>

                <button className = 'search-search'></button>
            </div>
        </div>
    )
}

export default SearchArea;