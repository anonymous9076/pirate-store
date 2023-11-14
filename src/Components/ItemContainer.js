import React from 'react'
import "./ItemContainer.css";
import Like from './Like';
import { NavLink } from 'react-router-dom';
function ItemContainer({ name,pic,rating,dis,id }) {

  return (
    <div className='ic1'>
      {dis?<div className='ic1-discount'>{dis}%</div>:''}
      <Like></Like>
      
      <NavLink to={`/si/${id}`}  style={{textDecoration:'none',color:'black'}}>
      <div className='ic1-img-handle'>
      <img src={pic} alt='...'></img>
      </div>
    </NavLink>

      <div className='ic1-name'>
      {name}
      </div>
     {rating ?<p>rating : {rating}</p>:''}
    </div>
  )
}

export default ItemContainer