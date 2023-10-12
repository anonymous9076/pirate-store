import React from 'react'
import "./ItemContainer.css";
import Like from './Like';
function ItemContainer({ name,pic,price }) {

  return (
    <div className='container'>
      <Like></Like>
      <img src={pic} alt='...'></img>
      <div className='item-name'>
      {name}
      </div>
      <div className='item-price'>
        <p>${price}</p>
        <p> <strike>${price+250}</strike></p>
      </div>
    </div>
  )
}

export default ItemContainer