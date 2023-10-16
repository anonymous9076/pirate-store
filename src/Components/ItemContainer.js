import React from 'react'
import "./ItemContainer.css";
import Like from './Like';
function ItemContainer({ name,pic,price }) {

  return (
    <div className='ic1'>
      <Like></Like>
      <img src={pic} alt='...'></img>
      <div className='ic1-name'>
      {name}
      </div>
      <div className='ic1-price'>
        <p>${price}</p>
        <p> <strike>${price+250}</strike></p>
      </div>
    </div>
  )
}

export default ItemContainer