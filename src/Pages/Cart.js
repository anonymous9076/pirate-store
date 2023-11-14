import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../Components/CartItem'
import { CartDataContext } from '../Context/CreateContext'
import {Link} from 'react-router-dom';

function Cart() {
  const { cart,totalprice } = useContext(CartDataContext)
    let shipping=0;


  return (
    <div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5" style={{ userSelect: 'none' }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {cart.map((p,index) =>
                <CartItem {...p} key={index}></CartItem>
              )}
              {cart.length!==0?<>
                <Link to='/' style={{textDecoration:'none', color:'white'}}><button type='submit' className='cart_shop_btn'>Continue Shopping</button></Link>
              <div className="card total_pay">
                <div className='cart-total'><span>Subtotal:</span><span className='price_bold'>${totalprice}</span></div>
                <div className='cart-total'><span>Shipping fee:</span><span className='price_bold'>${shipping}</span></div>
                <hr></hr>
                <div className='cart-total'><span>Order Total:</span><span className='price_bold'>${totalprice+shipping}</span></div>

                <button type="button" className="btn btn-block btn-lg cart-btn">Proceed to Pay</button>
              </div></>
              :<h2 style={{textAlign:'center'}}>Cart is Empty</h2>
               }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart