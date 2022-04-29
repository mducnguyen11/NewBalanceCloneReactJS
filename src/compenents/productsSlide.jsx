import { useState } from "react";
import "./productsSlide.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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

const productsFakeData2 = [{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},
{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},
{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
},{
  image: "https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  name:"Made in USA Core",
  price: "199",
  type:"Men's",
  available: false
}

]

const Product = (props)=>{
 
  

    return(
         <div className="home__product">

           <div className="home__product__status">
             <span> {props.available?"Availabe" : "Comming soon"} </span>
           </div>
                 <a href="">
                 <img src={props.image} alt="" />
                 </a>
                 <div className="home__product__info">
                   <p>{props.name}</p> <p>${props.price}</p>
                 </div>
                 <span className="home__product__gender">
                 {props.type}
                 </span>
         </div>

    )
}


function ProductsSlide() {
  const [option, setOption] = useState(true);

  return (
    <div className="usashop container">
      <h1>The MADE in USA Collection</h1>
      <div className="usashop__options">
        <div className="usa__options__btn">
          <button
            onClick={() => {
              setOption(!option);
            }}
            className="usashop__options__item"
          >
            Up comming SS'22
          </button>

          <button
            onClick={() => {
              setOption(!option);
            }}
            className="usashop__options__item"
          >
            Available now
          </button>
        </div>
        <div className="options__underline">
          <div
            className={
              option
                ? "usashop__options__item__underline btnactive"
                : "usashop__options__item__underline"
            }
          ></div>
          <div
            className={
              !option
                ? "usashop__options__item__underline btnactive"
                : "usashop__options__item__underline"
            }
          ></div>
        </div>
      </div>
      <div className="usashop__slide">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination= {false}
        navigation={{
          nextEl:'.nextProduct',
          prevEl: '.preProduct'
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

        {
          option?productsFakeData2.map((a) =>           
          <SwiperSlide>  <Product {...a} /> </SwiperSlide>          
        ) : productsFakeData.map((a) =>           
        <SwiperSlide>  <Product {...a} /> </SwiperSlide>          
      )
        }
        
        
      </Swiper>

      <div className="productSlide__navigation">
          
          <div className="preProduct"> <i class='bx bx-chevron-left' ></i> </div>
          <div className="nextProduct"> <i class='bx bx-chevron-right'></i> </div>
      </div>
             
      </div>

      <div className="usashop__btn">
        <a href="#">
           <button> Shop MADE in USA </button>
        </a>
      </div>
      
    </div>
  );
}



export default ProductsSlide;
export {Product} ;
