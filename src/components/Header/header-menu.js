import '../../css/Header/header.scss'
import React from 'react'

function MenuArea(){
    return(
        <div className = 'menu'>
            <div className='menu-list'>
                <from>
                <button className = 'menu-button'>
                    <div className ="Frame">
                        <a className='mail'></a>
                    </div>
                    <p><b>메일</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='cafe'></a>
                    </div>
                    <p><b>카페</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='blog'></a>
                    </div>
                    <p><b>블로그</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='shopping'></a>
                    </div>
                    <p><b>쇼핑</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='news'></a>
                    </div>
                    <p><b>뉴스</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='stock'></a>
                    </div>
                    <p><b>증권</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='estate'></a>
                    </div>
                    <p><b>부동산</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='map'></a>
                    </div>
                    <p><b>지도</b></p>
                </button>

                <button className = 'menu-button'>
                <div className ="Frame">
                    <a className='webtoon'></a>
                    </div>
                    <p><b>웹툰</b></p>
                </button>

                <button className = 'menu-button-ETC'>
                <div className ="Frame">
                    <a className='etc'></a>
                    </div>
                </button>
                </from>
            </div>
        </div>
    )
}

export default MenuArea;