import React from 'react'

const Item=({itemImage})=>{
    return(
        <div className='col-4' style={visibility}>
            <img className='responsive' src={process.env.PUBLIC_URL+itemImage} alt='name'/>
        </div>
    )
}
const visibility={zIndex:'100'}
export default Item