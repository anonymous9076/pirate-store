import React,{useContext} from 'react'
import './TopRated.css'
import ItemContainer2 from './ItemContainer2'
import {DataContext} from '../Context/CreateContext'

function TopRated() {
  const {toprated} = useContext(DataContext);

  return (
    <div className='toprate-body'>
      <h2>Top Rated</h2>
      <div className='rating-list'>

        {toprated.map((p, index) => (
          <div className='top_per_item' key={index}>
            <ItemContainer2
              name={p.title}
              id={p.id}
              rating={p.rating}
              img={p.thumbnail}
              
              >
            </ItemContainer2>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TopRated