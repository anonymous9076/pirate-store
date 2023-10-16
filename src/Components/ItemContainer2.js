import React from 'react'
import './ItemContainer2.css'
import Like from './Like'
function ItemContainer2({name,price,rating,img}) {
    return (
        <div className='ic2'>
           <div className='ic2-img'>
            <div className='ic2-like'><Like></Like></div>
            <img src={img} alt='...'></img>
           </div>
           <div className='ic2-title'>{name}</div>
           <div className='ic2-rating'>Rating : {rating}</div>
           <div className='ic2-price'>
            <div>
            <strike>$ {price+200}</strike> <b>$ {price}</b>
            </div>
            <div className='ic2-btn'>
                <button>View Item</button>
            </div>
            </div>

        </div>
    )
}

export default ItemContainer2