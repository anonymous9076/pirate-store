import React from 'react'

function CartItemBtn({NoOfItem,setDecrease,setIncrease}) {
  //isdi sari css cart vale page ta and specificcat ch hai
    return (

    <div> 
        <div className='cart_input'>
    <input name="quantity" value={NoOfItem} type="text"/>
    <span title='Dec' onClick={()=>setDecrease()}>{'<'}</span>
    <span title='Inc' onClick={()=>setIncrease()}>{'>'}</span>
    </div>
    </div>
  )
}

export default CartItemBtn