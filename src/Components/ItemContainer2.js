import React from 'react'
import './ItemContainer2.css'
import Like from './Like'
import RatingStars from '../Components/RatingStars'
import { NavLink } from 'react-router-dom'


function ItemContainer2({ name, price, rating, img, discount, id }) {
    return (
        <div className='ic2'>
            <div className='ic2-img'>
                <div className='ic2-like'><Like></Like></div>
                <img src={img} alt='...'></img>
            </div>
            <div className='ic2-title'>{name}</div>
            <div className='ic2-rating'>Rating :  <span><RatingStars star={Math.round(rating)} size="small"></RatingStars></span></div>
            <div className='ic2-price'>
                <div>
                    <strike>$ {Math.round(((100 / discount) + price))} </strike> <b>$ {price}</b>
                </div>
                <NavLink to={`/si/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='ic2-btn'>
                        <button>View Item</button>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default ItemContainer2