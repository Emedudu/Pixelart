import React from 'react';
import './wallets.css';

const Wallet=({nameImage})=>{
    return(
        <div className='walletWrapper col-6 col-sm-4 col-lg-2'>
            <div className='contained'>
                <img src={process.env.PUBLIC_URL+nameImage[1]} alt={`${nameImage[0]} image`}/>
                <a className='walletLink'>{nameImage[0]}</a>
            </div>
        </div>
        
    )
}
export default Wallet;