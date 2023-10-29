import React, { useContext, useRef } from 'react';
import './Deals.css';
import ItemContainer from './ItemContainer';
import {DataContext} from '../Context/CreateContext'
const Deals = () => {

  const listRef = useRef(null);
  const {filtereditem} = useContext(DataContext);

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

        {filtereditem.map((p, index) => (
          <div className='per-item' key={index}>
            <ItemContainer
              name={p.title}
              id={p.id}
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