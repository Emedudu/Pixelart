import React from 'react';
import SegmentWrapper from '../segmentWrapper/segmentWrapper';
import Auction from './auctions/auction';
import './topSellers.css';

const LiveAuctions=()=>{
    const auctions={
        'Meta Mask':'nftItem.gif',
        'Binance':'nftItem.gif'
    }
    const auctionsArray=Object.entries(auctions)
    return(
        <SegmentWrapper title='TOP SELLERS'>
            <div className='walletsPosition row'>
                {auctionsArray.map((elem,i)=>{return(<Auction nameImage={elem} key={i}/>)})}
            </div>
        </SegmentWrapper>
    )
}

export default LiveAuctions