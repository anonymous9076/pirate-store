import React,{useContext} from 'react'
import './Cart.css'
import CartItem from '../Components/CartItem'
import {CartDataContext} from '../Context/CreateContext'

function Cart() {
  const {cart}=useContext(CartDataContext)
 
  return (
    <div>
    <section className="h-100" style={{backgroundColor: "#eee"}}>
    <div className="container h-100 py-5" style={{userSelect: 'none'}}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-10">
  
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          </div>
          {cart.map((p)=>
          <CartItem {...p}></CartItem>
          )}
          
                <div className="card total_pay">
                    <button type="button" className="btn btn-block btn-lg cart-btn">Proceed to Pay</button>
                </div>
            
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Cart