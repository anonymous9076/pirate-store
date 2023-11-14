import React from 'react'
import Carousel from '../Components/Carousel';
import Category from '../Components/Category';
import Navbar from '../Components/Navbar';
import Deals from '../Components/Deals';
import TopRated from '../Components/TopRated';
import Sitedis from '../Components/Sitedis'
import SpecialItems from '../Components/SpecialItems'
function Home() {
    return (
        <div>
          
            <Navbar></Navbar>
            <Sitedis></Sitedis>
            <Category></Category>
            <Carousel></Carousel>
            <Deals></Deals>
            <SpecialItems></SpecialItems>
            <TopRated></TopRated>
        </div>
    )
}

export default Home