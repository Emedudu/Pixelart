import React from "react";
import './segmentWrapper.css';

const SegmentWrapper=({title,children})=>{
    return(
        <div className='wallet-wrapper'>
            <div className='segment'>
                <div className='hr'/>
                <div className='centerTopic'><h3>{title}</h3></div>
                <div className='hr'/>
            </div>
            {children}
        </div>
    )
}
export default SegmentWrapper;