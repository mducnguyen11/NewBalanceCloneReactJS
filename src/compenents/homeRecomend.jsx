import {Product} from "./productsSlide"
import { Swiper, SwiperSlide } from "swiper/react";
import "./homeRecomend.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination , Navigation } from "swiper";



const productsFakeData = [{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },
  {
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },
  {
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  },{
    image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
    name:"Made in USA Core",
    price: "199",
    type:"Men's",
    available: true
  }
  
  ]

const HomeRecomend = () =>{


    return(
        <div className="homerecomend">
            <h2>Recommended for you</h2>

            <div className="homerecomend__slide">
            <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination= {false}
        navigation={{
          nextEl:'.homerecomend__nextProduct',
          prevEl:'.homerecomend__preProduct'
        }}
        breakpoints={{
          
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView : 3,
            spaceBetween: 0,
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >

       { productsFakeData.map((a) =>           
          <SwiperSlide>  <Product {...a} /> </SwiperSlide>          
        ) }
        
        
      </Swiper>

      <div className="productSlide__navigation">
          
          <div className="homerecomend__preProduct"> <i class='bx bx-chevron-left' ></i> </div>
          <div className="homerecomend__nextProduct"> <i class='bx bx-chevron-right'></i> </div>
      </div>

            </div>


        </div>
    )
}
export default  HomeRecomend