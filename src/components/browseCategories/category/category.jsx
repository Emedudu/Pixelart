import React from 'react'
import Item from './item/item'
import './category.css'
const Category=({catName,catItems})=>{
    return(
        <div className='col-12 col-sm-6 col-lg-4 catWrapper'>
            <div className='catContainer'>
                <div className='row imageContainer'>
                    {catItems.map((elem,i)=>{return(<Item key={i} itemImage={elem}/>)})}
                </div>
                <div>
                    {catName}
                </div>
            </div>

            
        </div>
    )
}
export default Category