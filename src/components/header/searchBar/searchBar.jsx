import React from 'react';
import './searchBar.css';

const SearchBar=()=>{
    return(
        <div className='row'>
            <div>
                <input className='col-xs-2' type='text' placeholder='search NFTs'/>
            </div>
        </div>
     
    )
}

export default SearchBar