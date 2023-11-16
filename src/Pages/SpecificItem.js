import React, { useContext, useEffect,useState } from 'react'
import './SpecificItem.css'
import { NavLink, useParams } from 'react-router-dom'
import {DataContext} from '../Context/CreateContext.js'
import RatingStars from '../Components/RatingStars'
import Navbar from '../Components/Navbar'
import CartItemBtn from '../Components/CartItemBtn'
import {CartDataContext} from '../Context/CreateContext.js'

function SpecificItem() {

    const { singleItemData,singleitem,isLoading } = useContext(DataContext)
    const {addtocart}=useContext(CartDataContext)
    const { id } = useParams();
    const [amount,setamount]=useState(1)
    //its like props that we get from context
    const {
        title,
        thumbnail,
        category,
        price,
        rating,
        discountPercentage,
        description,
        stock,
        images
    } = singleitem

    const [showImg,setShowImg]=useState()
    useEffect(() => {
        singleItemData(`http://localhost:8080/id=${id}`)
    }, [])
    
    const handleChangeImg=(p,event)=>{
        event.stopPropagation()
        setShowImg(p)
    }
    const setDecrease=()=>{
        amount>1?setamount(amount-1):setamount(1)
    }
    const setIncrease=()=>{
        amount<stock?setamount(amount+1):setamount(stock)
    }

    if(isLoading){
        return(
            <h2 style={{textAlign:'center'}}>loading plz wait</h2>
        )
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='si-body'>
                <div className='si-img'>
                    <div className='si-thumbnail'>
                        {showImg ? <img src={showImg} alt='...'></img>
                        : <img src={thumbnail} alt='...'></img>}
                       
                    </div>
                    {images ?
                    <div className='si-alt-img'>
                        {images.map((p,index)=>
                        <img src={p} alt='...' key={index} onClick={(event)=>handleChangeImg(p,event)}></img>)}
                    </div>:""}  
                    </div>
                <div className='si-detail'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Rating : <RatingStars star={Math.round(rating)} size="small"></RatingStars></p>
                    <hr></hr>
                    <p>{Math.round(discountPercentage)}% <b>₹{price}</b></p>
                    <strike>M.R.P : ₹{Math.round(((100 / discountPercentage) + price))} </strike>
                    <p>Inclusive all taxes</p>
                    <hr></hr>
                    <p>Category : {category}</p>        
                    <p> In Stock : {stock} </p>
                    <div className="si_item_selector">
                           <CartItemBtn
                           amount={amount}
                           setDecrease={setDecrease}
                           setIncrease={setIncrease}
                           ></CartItemBtn>
                        </div>
                    <div className='si-btns'>
                        <NavLink to='/cart' onClick={()=>addtocart(id,stock,amount,singleitem)}><button id='si_btn'>add to cart</button></NavLink>
                        <button id='si_btn'>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecificItem