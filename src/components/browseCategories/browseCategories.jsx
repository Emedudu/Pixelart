import React from 'react'
import Category from './category/category'
import './browseCategories.css'
import SegmentWrapper from '../segmentWrapper/segmentWrapper'

const categories={
    'Digital Art':['browseCategory.jpg','browseCategory.jpg','browseCategory.jpg','browseCategory.jpg'],
    'Music':['browseCategory.jpg','browseCategory.jpg','browseCategory.jpg','browseCategory.jpg'],
    'Domain Name':['browseCategory.jpg','browseCategory.jpg','browseCategory.jpg','browseCategory.jpg'],
    'Sports':['browseCategory.jpg','browseCategory.jpg','browseCategory.jpg','browseCategory.jpg']
}
const BrowseCategories=()=>{

    return(
        <SegmentWrapper title='BROWSE BY CATEGORY'>
            <div className='catPosition row'>
                {Object.entries(categories).map(
                    (category,i)=>{
                        return(<Category key={i} catName={category[0]} catItems={category[1]}/>)
                    })
                }
            </div>
        </SegmentWrapper>
    )
}
export default BrowseCategories