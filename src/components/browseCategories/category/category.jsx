import React from 'react'
import Item from './item/item'
import './category.css'
const Category=({catName,catItems})=>{
    return(
        <div className='row catContainer'>
            {catItems.map((elem,i)=>{return(<Item key={i} itemImage={elem}/>)})}
        </div>
        
    )
}
export default Category