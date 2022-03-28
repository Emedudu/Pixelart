import React from 'react';
import './auction.css';

const Auction=({nameImage})=>{
    return(
        <div className='auctionContainer col-10 col-sm-5 col-lg-3'>
            <img className='responsive' src={process.env.PUBLIC_URL+nameImage[1]} alt={`${nameImage[0]} image`}/>
            <a className='auctionLink'>{nameImage[0]}</a>
        </div>
    )
}
export default Auction;