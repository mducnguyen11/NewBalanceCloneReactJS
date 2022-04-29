import React from 'react'
import HomeSlide from '../compenents/homeSlide'
import ProductsSlide from '../compenents/productsSlide'

import HomeFeatured from '../compenents/homeFeatured'
import HomeRecomend from '../compenents/homeRecomend'

const Home = ()=>{

    return(
        <div className='container homeContainer'>
           <HomeSlide/>
           <ProductsSlide/>
           <HomeFeatured/>
           <HomeRecomend/>

        </div>
    )
}

export default Home