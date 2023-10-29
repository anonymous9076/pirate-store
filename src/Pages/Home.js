import React from 'react'
import Carousel from '../Components/Carousel';
import Category from '../Components/Category';
import Navbar from '../Components/Navbar';
import Deals from '../Components/Deals';
import TopRated from '../Components/TopRated';

function Home() {
    return (
        <div>
          
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Category></Category>
            <Deals></Deals>
            <TopRated></TopRated>
        </div>
    )
}

export default Home