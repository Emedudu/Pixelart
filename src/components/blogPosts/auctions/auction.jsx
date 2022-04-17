import React from 'react';
import './auction.css';

const Auction=({nameImage})=>{
    return(
        <div className='auctionWrapper col-12 col-sm-6 col-lg-4'>
            <div className='auctionContainer '>
                <img className='responsive' src={process.env.PUBLIC_URL+nameImage[1]} alt={`${nameImage[0]} image`}/>
                <a className='auctionLink'>{nameImage[0]}</a>
            </div>
        </div>
    )
}
export default Auction;