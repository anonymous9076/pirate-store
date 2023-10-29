import React, { useContext } from 'react'
import './SpecificCategory.css'
import ItemContainer2 from '../Components/ItemContainer2'
import Navbar from '../Components/Navbar'
import RatingStars from '../Components/RatingStars'
import {FilterDataContext} from '../Context/CreateContext'

function SpecificCategory() {
  const {sorting,filterData,allData,handleReset,handleFilterAll}=useContext(FilterDataContext)
  const getUniqueData=(data,name)=>{
    let list = data.map((p)=>p[name])
    list = ["ALL",...new Set(list)]
    return list
  }  

  const categoryList=getUniqueData(allData,"category")
  return (
    <>
      <Navbar></Navbar>
      <div className='sc'>
        <div className="sc-filter">
          <h1>Filter</h1>
          <hr></hr>

          <h3>Price</h3>
          <ul className='sc-price my-2' >
            <li>
              <input type='radio' name='price' value={300} onClick={handleFilterAll} ></input>
              <label className='mx-2'> below-300</label>
            </li>
            <li>
              <input type='radio' name='price' value={400} onClick={handleFilterAll} ></input>
              <label className='mx-2'> 300-400</label>
            </li>
            <li>
              <input type='radio' name='price' value={500} onClick={handleFilterAll} ></input>
              <label className='mx-2'> 400-500</label>
            </li>
            <li>
              <input type='radio' name='price' value={1000} onClick={handleFilterAll} ></input>
              <label className='mx-2'> 500-1000</label>
            </li>
            <li>
              <input type='radio' name='price' value={1001} onClick={handleFilterAll} ></input>
              <label className='mx-2'> 1000-above</label>
            </li>
          </ul>

          <h3>Category</h3>
          <ul className='sc-discount my-2'>
            {categoryList ?
            categoryList.map((p)=>
            <li>
              <input type='radio' name='category' value={p}  onClick={handleFilterAll}></input>
              <label className='mx-2'> {p}</label>
            </li>):''}
          </ul>

          <h3>Discount</h3>
          <ul className='sc-discount my-2'>
            <li>
              <input type='radio' name='discount' ></input>
              <label className='mx-2'> 50%</label>
            </li>
            <li>
              <input type='radio' name='discount' ></input>
              <label className='mx-2'> 30%</label>
            </li>
            <li>
              <input type='radio' name='discount' ></input>
              <label className='mx-2'> 20%</label>
            </li>
            <li>
              <input type='radio' name='discount' ></input>
              <label className='mx-2'> 10%</label>
            </li>
            <li>
              <input type='radio' name='discount' ></input>
              <label className='mx-2'> 5%</label>
            </li>
          </ul>

          <h3>Rating</h3>
          <ul className='sc-rating my-2'>
            <li>
              <input type='radio' name='rating' ></input>
              <label className='mx-2'> <RatingStars size="small" star={5}></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' ></input>
              <label className='mx-2'> <RatingStars size="small" star={4}></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' ></input>
              <label className='mx-2'> <RatingStars size="small" star={3}></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' ></input>
              <label className='mx-2'> <RatingStars star={2} size="small"></RatingStars></label>
            </li>
            <li>
              <input type='radio' name='rating' ></input>
              <label className='mx-2'> <RatingStars size="small" star={1}></RatingStars></label>
            </li>
          </ul>
          <div className='sc-filter-reset my-2 mt-4'>
            <button type='submit' onClick={handleReset}>Reset</button>
          </div>
        </div>

        <div className='sc-item-div'>

          <div className='sc-sort-place'>
            <span className='item-count'>Available item :{filterData.length}</span>
            <span className='item-sort'>
              <label htmlFor='sort'></label>
              <select id='sort' name='sort' onClick={sorting}>
                <option value="none">Sort (Price)</option>
                <option value="lowest" >low-high</option>
                <option value="highest" >high-low</option>
                <option value="a-z" >A-Z</option>
                <option value="z-a" >Z-A</option>
              </select>
            </span>
          </div>
            <div className='sc-multi-item'>
              { filterData.map((p, index) =>
              <div key={index}>
                <ItemContainer2
                  name={p.title}
                  price={p.price}
                  rating={p.rating}
                  img={p.thumbnail}
                  id={p.id}
                  discount={p.discountPercentage}
                ></ItemContainer2>
              </div>)}
            </div>
        </div>
      </div>
    </>
  )
}

export default SpecificCategory