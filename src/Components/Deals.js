
import React, { useEffect, useRef, useState } from 'react';
import './Deals.css';
import ItemContainer from './ItemContainer';
import axios from 'axios';

const Deals = () => {
  const listRef = useRef(null);
  const[DataApi,setDataApi]=useState([])

  const getdata = async() => {
    try{
    const res=await axios.get('http://localhost:8080/products');
    const data=res.data.products;
    const filter=data.filter((i)=>i.discountPercentage>40
    )
    setDataApi(filter)}
    catch(error){
      console.log(error)
    }
  }
useEffect(()=>{
  getdata()
})

  const handleScroll = (direction) => {
    const scrollAmount = 253;
    const list = listRef.current;

    if (list) {
      if (direction === 'prev') {
        list.scrollLeft -= scrollAmount;
      } else if (direction === 'next') {
        list.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className='deals'>
      <h2>Top Deals</h2>
      <div ref={listRef} id='list' className='deal-list'>

        {DataApi.map((p,index) => (
          <div className='per-item' key={index}>
            <ItemContainer
              name={p.title} 
              dis={p.discountPercentage}
              pic={p.thumbnail}
              price={p.price}>
            </ItemContainer>
          </div>
        ))}

      </div>
      <button className='carousel-btns' onClick={() => handleScroll('prev')}>
        {'<'}
      </button>
      <button className='carousel-btns' onClick={() => handleScroll('next')}>
        {'>'}
      </button>
    </div>
  );
};

export default Deals;