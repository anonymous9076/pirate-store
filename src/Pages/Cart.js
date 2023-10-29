import React from 'react'
import './Cart.css'

function Cart() {
// const [itemNum,setItemNum]=useState(1);

  // const handleItemNum=(side)=>{
  //     if(side=='up'){
  //       setItemNum(itemNum+1)
  //     }
  //     if(side=='down'){
  //       setItemNum(itemNum-1)
  //     }
  // }

  return (
    <div>
    <section className="h-100" style={{backgroundColor: "#eee"}}>
    <div className="container h-100 py-5" style={{userSelect: 'none'}}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-10">
  
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          </div>
  
          <div className="card rounded-3 mb-4">
            <div className="card-body p-4">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <input id="form1" min="0" max='10' name="quantity" defaultValue='1' type="number" 
                    className="form-control form-control-sm" />
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-block btn-lg cart-btn">Proceed to Pay</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Cart