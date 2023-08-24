import '../../css/Header/header.scss'
import React from 'react' 
import SearchArea from './header-search';
import Bar from './header-bar';
import MenuArea from './header-menu';

function Header(){
    return(
        <div className = 'header'>
            <Bar/>
            <SearchArea/>
            <MenuArea/>
        </div>
    )
}

export default Header;