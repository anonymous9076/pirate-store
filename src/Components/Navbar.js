import React, { useState } from 'react'
import "./Navbar.css"
import { BsSearch, BsCart2 } from 'react-icons/bs'
import { BiCategory, BiSolidUser, BiMenu } from 'react-icons/bi'
import {Link} from 'react-router-dom';

function Navbar() {
    const [catDrop,setcatDrop]=useState(false)
    const [userDrop,setuserDrop]=useState(false)
    const [menuDrop,setmenuDrop]=useState(false)

    const handlecatEnter=()=>{
        setcatDrop(!catDrop)
    }
    const handleuserEnter=()=>{
        setuserDrop(!userDrop)
    }
    const handlemenu=()=>{
        setmenuDrop(!menuDrop)
    }
   
    return (
        <div className='navbar'>
            <div className='nav-img'>
                <img src='./img/new.png' alt='...'></img>
            </div>
            <div className='nav-title'>
                PiraTe StoRe
            </div>
            <div className='nav-searchbar'>
                <input id='search' type="search" placeholder='Search'></input>
                <BsSearch id='search-icon'></BsSearch>
            </div>
            <div className='nav-cart'>
                <button type="button" className="btn position-relative" style={{color:'white'}}>
                <BsCart2></BsCart2> 
                    <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill ">
                        
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                    cart
            </div>
            <div className='nav-category'  onClick={handlecatEnter} >
                <BiCategory className='mx-2' ></BiCategory> categories
                {catDrop? <div className='cat-dropdown'>
                    <ul>
                        <li>Clothes</li>
                        <li>Posters</li>
                        <li>Ascessories</li>
                        <li>Comics</li>
                        <li>Home Appliences</li>
                        <li>Action Figures</li>
                        <li>Katanas</li>
                    </ul>
                </div>:''
                }
               
            </div>
            <div className='nav-user' onClick={handleuserEnter} >
                <BiSolidUser className='mx-2'></BiSolidUser>  user
                {userDrop?
                <div className='user-dropdown'>
                    <ul>
                        <li><Link style={{textDecoration:'none', color:'white'}} to="/login">Login</Link></li>
                        <li><Link style={{textDecoration:'none', color:'white'}} to="/signin">Signin</Link></li>
                        <li>Setting</li>
                        <li>Help</li>
                        <li>Contact us</li>
                    </ul>
                </div>:''}

            </div>
            <div className='nav-menu' onClick={handlemenu}>
                <BiMenu></BiMenu>
                {menuDrop?
                <div className='menu-dropdown'>
                    <h5>Menu</h5>
                    <ul>
                        <li>Home</li>
                        <li>Wishlist</li>
                        <li>My Order</li>
                        <li>My Cart</li>
                        <li>My Address</li>
                        <li>Category</li>
                        <li>Best Seller</li>
                    </ul>
                    <h5>Help & Support</h5>
                    <ul>
                        <li>Support</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Need Help</li>
                    </ul>
                </div>
                    :''}
            </div>

        </div>
    )
}

export default Navbar