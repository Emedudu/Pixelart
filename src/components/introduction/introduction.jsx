import React from 'react';
import './introduction.css';

const Introduction =()=>{
    return(
        <div className='padIntro'>
            <div className='description col-lg-6 '>
                <h1 className='topic'>
                    <span className='keyword'>Create</span>, Collect And <span className='keyword'>Sell</span> Digital Items.
                </h1>
                <p className='describe'>
                    Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
                </p>
                <div className='buttons'>
                    <a>
                        <div className='button explore'>
                            Explore
                        </div>
                    </a>
                    <a>
                        <div className='button create'>
                            Create
                        </div>
                    </a>              
                </div>
            </div>

            <div className='card col-12 col-lg-6'>

            </div>
        </div>
    )
}

export default Introduction;