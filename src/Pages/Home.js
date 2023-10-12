import React from 'react'
import Carousel from '../Components/Carousel';
import Category from '../Components/Category';
import Navbar from '../Components/Navbar';
import Deals from '../Components/Deals';

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Category></Category>
            <Deals></Deals>
            <h2>top products</h2>
        </div>
    )
}

export default Home