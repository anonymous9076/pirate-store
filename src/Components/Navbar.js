import React, { useContext,useState } from 'react'
import "./Navbar.css"
import { BsSearch } from 'react-icons/bs'
import { BiSolidCategory, BiSolidUser, BiMenu } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { CartDataContext } from '../Context/CreateContext'
import { FilterDataContext } from '../Context/CreateContext'

function Navbar() {
    const { cart } = useContext(CartDataContext)
    const navigate=useNavigate()
    const { allData, handleFilterAll,handleSearch } = useContext(FilterDataContext)
    const getUniqueData = (data, name) => {
        let list = data.map((p) => p[name])
        if (name !== 'price') {
            list = ['ALL', ...new Set(list)]
            return list
        }
        return list
    }
    const [text,setText]=useState('')
    const categoryList = getUniqueData(allData, "category")
    const GoToCategory=()=>{
        handleSearch(text)
       navigate('/sc')
    }
    const handleText=(e)=>{
        setText(e.target.value)
    }

    return (
        <div className='navbar'>

            <div className='nav-img'></div>


            <div className='nav-searchbar'>
                <input id='search' type="search" value={text} placeholder='Search' onChange={(e)=>handleText(e)}></input>
                <BsSearch id='search-icon' onClick={GoToCategory}></BsSearch>
            </div>

            <div className='nav-category'   >
                <BiSolidCategory className='mx-1 yellow' ></BiSolidCategory>Categories
                <div className='cat-dropdown'>
                    <ul>
                        {categoryList.map((p) =>
                            <li onClick={(e) => handleFilterAll(e, 'category', p)} ><Link to='/sc' style={{ textDecoration: 'none', color: 'white' }}> {p}</Link></li>
                        )}
                    </ul>
                </div>
            </div>

            <div className='nav-user'  >
                <BiSolidUser className='mx-2 yellow'></BiSolidUser>  Profile

                <div className='user-dropdown'>
                    <ul>

                        <li>Wishlist</li>
                        <li>My Order</li>
                        <li><Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>My Cart</Link></li>
                        <li>My Address</li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/signin">Signin</Link></li>

                    </ul>
                </div>
            </div>


            <div className='nav-cart  '>
                <Link to='/cart' style={{ textDecoration: 'none', color: 'rgb(183, 183, 183)' }}>
                    <button type="button" className="btn position-relative mb-2" style={{ color: 'white' }}>
                        <PiShoppingCartSimpleFill className='mx-1 cart_icon yellow'></PiShoppingCartSimpleFill>
                        <span className="position-absolute translate-middle badge rounded-pill mt-2 " style={{ color: 'white' }}>
                            {cart.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                    Cart
                </Link>
            </div>

            <div className='nav-menu'>
                <BiMenu className='yellow'></BiMenu>

                <div className='menu-dropdown'>
                    <h5>Menu</h5>
                    <hr></hr>
                    <ul>
                        <li><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                        <li><Link to='/sc' style={{ textDecoration: 'none', color: 'white' }}>Category</Link></li>
                        <li>Become-Seller</li>
                        <li>Best Sellers</li>
                        <li>Setting</li>
                    </ul>
                    <h5>Help</h5>
                    <hr></hr>

                    <ul>
                        <li>Support</li>
                        <li>Contact</li>
                        <li><Link target='_blank' to='http://tushar1292.netlify.app' style={{ textDecoration: 'none', color: 'white' }}>
                            About
                        </Link></li>
                        <li>Need Help</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navbar