import React, { useContext } from 'react'
import './SpecialItems.css'
import ItemContainer3 from './ItemContainer3'
import { FilterDataContext } from '../Context/CreateContext'


function SpecialItems() {
   const {allData } = useContext(FilterDataContext)
   
    const data1=allData.filter((p)=>p.price<=500).slice(0,4)
    const data2=allData.filter((p)=>p.id<12).slice(0,4)

    return (
        <div className='spi_body'>
            <div className='spi_container'>
                <div className='spi_heading'> Best Products On This Store Under $500</div>
                <div className='spi_container_body'>
                    {data1.map((p) => 
                        <span id='no1'><ItemContainer3 img={p.thumbnail}></ItemContainer3></span>
                    )}
                </div>
            </div>

            <div className='spi_container'>
                <div className='spi_heading'> Branded Products On This Store Diff Categories</div>
                <div className='spi_container_body'>
                {data2.map((p) => 
                        <span id='no1'><ItemContainer3 img={p.thumbnail}></ItemContainer3></span>
                    )}
                </div>
            </div>

        </div>
    )
}

export default SpecialItems