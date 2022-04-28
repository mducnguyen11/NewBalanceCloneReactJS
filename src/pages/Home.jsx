import React from 'react'
import HomeSlide from '../compenents/homeSlide'
import ProductsSlide from '../compenents/productsSlide'

const Home = ()=>{

    return(
        <div className='container'>
           <HomeSlide/>
           <ProductsSlide/>
        </div>
    )
}

export default Home