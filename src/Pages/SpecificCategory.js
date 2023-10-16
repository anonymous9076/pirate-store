import React, { useState } from 'react'
import './SpecificCategory.css'
import ItemContainer2 from '../Components/ItemContainer2'
import Data from '../Database/Data'
import Navbar from '../Components/Navbar'
import RatingStars from '../Components/RatingStars'

function SpecificCategory() {
  const [filteredData,setFilteredData]=useState(Data);

  const handlePrice=(low,high)=>{
  setFilteredData(Data.filter((p)=>
    ((p.price>=low)&(p.price<=high))
  ))
  }
  const handleDiscount=(dis)=>{
      setFilteredData(Data.filter((d)=>
      d.discountPercentage<=dis
      ))
  }
  const handleRating=(rate)=>{
    setFilteredData(Data.filter((r)=>
    ((r.rating>=(rate-1))&(r.rating<=rate))
    ))
}

  return (
    <>
      <Navbar></Navbar>
      <div className='sc'>
        <div className="sc-filter">
          <h1>Filter{'>>>'}</h1>
          <hr></hr>

          <h3>Price</h3>
          <ul className='sc-price'>
            <li>
              <input type='radio' name='price' onClick={()=>handlePrice(0,300)}></input>
              <label className='mx-2'> below-300</label>
            </li>
            <li>
              <input type='radio' name='price' onClick={()=>handlePrice(300,400)}></input>
              <label className='mx-2'> 300-400</label>
            </li>
            <li>
              <input type='radio' name='price' onClick={()=>handlePrice(400,500)}></input>
              <label className='mx-2'> 400-500</label>
            </li>
            <li>
              <input type='radio' name='price' onClick={()=>handlePrice(500,999)}></input>
              <label className='mx-2'> 500-1000</label>
            </li>
            <li>
              <input type='radio' name='price' onClick={()=>handlePrice(1000,2000)}></input>
              <label className='mx-2'> 1000-above</label>
            </li>
          </ul>

          <h3>Discount</h3>
          <ul className='sc-discount'>
          <li>
              <input type='radio' name='discount' onClick={()=>handleDiscount(50)}></input>
              <label className='mx-2'> 50%</label>
            </li>
            <li>
              <input type='radio' name='discount' onClick={()=>handleDiscount(30)}></input>
              <label className='mx-2'> 30%</label>
            </li>
            <li>
              <input type='radio' name='discount' onClick={()=>handleDiscount(20)}></input>
              <label className='mx-2'> 20%</label>
            </li>
            <li>
              <input type='radio' name='discount' onClick={()=>handleDiscount(10)}></input>
              <label className='mx-2'> 10%</label>
            </li>
            <li>
              <input type='radio' name='discount' onClick={()=>handleDiscount(5)}></input>
              <label className='mx-2'> 5%</label>
            </li>
          </ul>

          <h3>Rating</h3>
          <ul className='sc-rating'>
            <li>
              <input type='radio' name='rating' onClick={()=>handleRating(5)}></input>
              <label className='mx-2'> <RatingStars star={5}></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' onClick={()=>handleRating(4)}></input>
              <label className='mx-2'> <RatingStars star={4}></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' onClick={()=>handleRating(3)}></input>
              <label className='mx-2'> <RatingStars star={3}></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' onClick={()=>handleRating(2)}></input>
              <label className='mx-2'> <RatingStars star={2}></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' onClick={()=>handleRating(1)}></input>
              <label className='mx-2'> <RatingStars star={1}></RatingStars></label>
            </li>
          </ul>
        </div>
        <div className='sc-item-div'>
          {filteredData.map(p => (
            <ItemContainer2
              name={p.title}
              price={p.price}
              rating={p.rating}
              img={p.thumbnail}
            ></ItemContainer2>
          ))}
        </div>
      </div>
    </>

  )
}

export default SpecificCategory