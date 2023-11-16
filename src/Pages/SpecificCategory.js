import React, { useContext } from 'react'
import './SpecificCategory.css'
import ItemContainer2 from '../Components/ItemContainer2'
import Navbar from '../Components/Navbar'
import RatingStars from '../Components/RatingStars'
import { FilterDataContext } from '../Context/CreateContext'
import { FaFilter } from "react-icons/fa";

function SpecificCategory() {
  const {
    sorting,
    filterData,
    allData,
    handleReset,
    handleFilterAll,
    handleFilterPrice,
    handleBrandFilter } = useContext(FilterDataContext)

  const getUniqueData = (data, name) => {
    let list = data.map((p) => p[name])
    if (name !== 'price') {
      list = ["ALL", ...new Set(list)]
      return list
    }
    return list
  }
  // const handleNavigation=(id)=>{
  //   navigate(`/si/${id}`)
  // }
  const handleApply = () => {
    console.log('hi')
    const a = document.querySelector('.sc-filter');
    if(a){
    a.style.display = 'none';
  }}
  const handleFilterAppear = () => {
    console.log('hi')
    const a = document.querySelector('.sc-filter');
    if(a){
    a.style.display = 'block';
  }}

  const categoryList = getUniqueData(allData, "category")
  const brandList = getUniqueData(filterData, "brand")
  const priceList = getUniqueData(allData, "price")
  const ratinglist = [5, 4, 3, 2, 1]
  const maxprice = Math.max(...priceList)

  return (
    <>
      <Navbar></Navbar>
      <div className='sc'>
        <div className="sc-filter">
          <h1>Filter</h1>
          <hr></hr>

          <h3>Category</h3>
          <ul className='sc-discount my-2'>
            {categoryList ?
              categoryList.map((p) =>
                <li>
                  <input
                    type='radio'
                    name='category'
                    value={p}
                    onClick={handleFilterAll}
                  ></input>
                  <label className='mx-2'> {p}</label>
                </li>) : ''}
          </ul>

          <h3>Brand</h3>
          <ul className='sc-brand my-2'>
            {brandList ?
              <select id='brand' name='brand'  >
                {brandList.map((p) =>
                  <option
                    value={p}
                    onClick={handleBrandFilter}
                  >{p}</option>
                )}
              </select>
              : ''}
          </ul>

          <h3>Price</h3>
          <ul className='sc-price my-2' >
            <li>
              <input type='radio' name='price' max={299} min={0} onClick={handleFilterPrice} ></input>
              <label className='mx-2'> below-299</label>
            </li>
            <li>
              <input type='radio' name='price' max={399} min={299} onClick={handleFilterPrice} ></input>
              <label className='mx-2'> 299-399</label>
            </li>
            <li>
              <input type='radio' name='price' max={499} min={399} onClick={handleFilterPrice} ></input>
              <label className='mx-2'> 399-499</label>
            </li>
            <li>
              <input type='radio' name='price' max={999} min={499} onClick={handleFilterPrice} ></input>
              <label className='mx-2'> 499-999</label>
            </li>
            <li>
              <input type='radio' name='price' max={maxprice} min={1000} onClick={handleFilterPrice} ></input>
              <label className='mx-2'> 1000-max</label>
            </li>
          </ul>

          <h3>Rating</h3>
          <ul className='sc-rating my-2'>
            {ratinglist.map((p) =>
              <li>
                <input type='radio' name='rating' value={p} onClick={handleFilterAll} ></input>
                <label className='mx-2'> <RatingStars size="small" star={p}></RatingStars></label>
              </li>)}
          </ul>

          <div className='sc-filter-apply my-2 mt-4'>
            <button type='submit' onClick={handleApply}>Apply/Close</button>
          </div>

          <div className='sc-filter-reset my-2 mt-4'>
            <button type='submit' onClick={handleReset}>Reset</button>
          </div>
        </div>

        <div className='sc-item-div'>

          <div className='sc-sort-place'>
            <span className='item-count'>Available item :{filterData.length}</span>
            <span title='filter' onClick={handleFilterAppear} className='sc_filter_icon'><FaFilter /></span>
            <span className='item-sort'>
              <label htmlFor='sort'></label>
              <select id='sort' name='sort' onClick={sorting}>
                <option value="none">Sort(Price)</option>
                <option value="lowest" >low-high</option>
                <option value="highest" >high-low</option>
                <option value="a-z" >A-Z</option>
                <option value="z-a" >Z-A</option>
              </select>
            </span>
          </div>

          <div className='sc-multi-item'>
            {filterData.map((p, index) =>
              <div key={index} >
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