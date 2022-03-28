import React from 'react';
import Wallet from './wallets/wallets';
import './walletOptions.css';
import SegmentWrapper from '../segmentWrapper/segmentWrapper';

const WalletOptions=()=>{
    const wallets={
        'Meta Mask':'walletImage.png',
        'Binance':'walletImage.png'
    }
    const walletsArray=Object.entries(wallets)
    return(
        <SegmentWrapper title='ALL WALLET OPTIONS'>
            <div className='walletsPosition'>
                {walletsArray.map((elem,i)=>{return(<Wallet nameImage={elem} key={i}/>)})}
            </div>
        </SegmentWrapper>
    )
}

export default WalletOptions