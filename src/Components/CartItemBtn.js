import React from 'react'
import './CartItemBtn.css'
function CartItemBtn({amount,setDecrease,setIncrease}) {
  //isdi sari css cart vale page ta and specificcat ch hai
    return (
    <div className='cart_input'>
    <div>{amount}</div>
    <span title='Dec' onClick={()=>setDecrease()}>{'<'}</span>
    <span title='Inc' onClick={()=>setIncrease()}>{'>'}</span>
    </div>
  )
}

export default CartItemBtn