import React from 'react';
import SearchBar from './searchBar/searchBar'
import './header.css'

const Header = ()=>{
    return(
        <header>
            <div className='header row'>
                <div className=' col col-xs-3'>
                    <img className='responsive' src={process.env.PUBLIC_URL+'logo.png'} alt='ENFTOMARK'/>
                </div>

            </div>
            <hr/>
        </header>
    )
}

export default Header