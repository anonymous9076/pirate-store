import { useContext } from 'react'
import './CartItem.css'
import { FaTrashAlt } from 'react-icons/fa'
import CartItemBtn from '../Components/CartItemBtn'
import { CartDataContext } from '../Context/CreateContext'

export default function CartItem({ id, title, NoOfItem,thumbnail, price }) {

    const { removeItem, setDecrease, setIncrease } = useContext(CartDataContext)
    return (
        <div >
            <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="cart_item_img">
                        <img
                            src={thumbnail}
                            alt={title} />
                    </div>
                    {/* name or title */}
                    <div className="cart_title">
                        <p>{title}</p>
                        <p><span className="text-muted">Size:</span> M <span className="text-muted">Color: </span>Grey</p>
                    </div>
                    {/* actual price  */}
                    <div className="cart_price ">
                        <h5 >$ {price}</h5>
                    </div>
                    {/* set quantity */}
                    <div className="cart_selector">
                        <div className='cart-sel-btn'>
                        <CartItemBtn
                            amount={NoOfItem}
                            setDecrease={() => setDecrease(id)}
                            setIncrease={() => setIncrease(id)}
                        ></CartItemBtn>
                        </div>
                    </div>
                    {/* price after setting quantity */}
                    <div className="cart_setted_price">
                        <h5>${NoOfItem * price}</h5>
                    </div>
                    {/* item remove */}
                    <div className="cart_item_remove">
                        <div className="text-danger" onClick={() => removeItem(id)}><FaTrashAlt ></FaTrashAlt></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
