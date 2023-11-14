import React from 'react'
import './ItemContainer3.css'
function ItemContainer3({img}) {
    return (

        <div className='ic3'>
                <div className='ic3-img'>
                    <img src={img} alt='...'></img>
                </div>
        </div>
    )
}

export default ItemContainer3