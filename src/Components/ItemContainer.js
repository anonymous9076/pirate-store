import React from 'react'
import "./ItemContainer.css";
import Like from './Like';
import { NavLink } from 'react-router-dom';
function ItemContainer({ name,pic,price,dis,id }) {

  return (
    <NavLink to={`/si/${id}`}  style={{textDecoration:'none',color:'black'}}>
    <div className='ic1'>
      <div className='ic1-discount'>{dis}%</div>
      <Like></Like>
      <div className='ic1-img-handle'>
      <img src={pic} alt='...'></img>

      </div>
      <div className='ic1-name'>
      {name}
      </div>
      <div className='ic1-price'>
        <p>${price-Math.round((dis/100)*price)}</p>
        <p> <strike>${price}</strike></p>
      </div>
    </div>
    </NavLink>
  )
}

export default ItemContainer