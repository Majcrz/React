import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Featured from '../components/Featured';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Offer from '../components/Offer';
import Recent_products from '../components/Recent_products';
import Vendor from '../components/Vendor';
import Footer from '../components/Footer';
import Back_to_top from '../components/Back_to_top.js';
import Topbar from '../components/Topbar';
export default function Fullpage() {
    return (
        <>


            <Topbar />
            <Navbar />
            <Carousel />
            <Featured />
            <Categories />
            <Products />
            <Offer />
            <Recent_products />
            <Vendor />
            <Footer />
            <Back_to_top />










        </>
    )
}
