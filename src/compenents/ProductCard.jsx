import "./ProductCard.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProductCard = ({img,name,price,type,listColor , index}) => {
  return (
    <div className="productcard">
      <img
        src={img}
        alt=""
      />
      <div className="productcard__info">
        <div className="productcard__info__row1">
          <span> {name}</span>
          <h3>{price}</h3>
        </div>
        <p>{type}</p>
      </div>
      <div className="productcard__slide">
        <div className={"productcard__slide__preProduct productcard__slide__preProduct__"+index}>
          <i class="bx bx-chevron-left"></i>
        </div>
        <div className="productcard__slide__mainSlide">
        <Swiper
        slidesPerView={7}
        spaceBetween={10}
        pagination={false}
        navigation={{
          nextEl:'.productcard__slide__nextProduct__'+index,
          prevEl: '.productcard__slide__preProduct__'+index
        }}
        breakpoints={{
          
          "@0.75": {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView : 5,
            spaceBetween: 10,
          }
        }}
       
        modules={[Navigation]}
        className="mySwiper"
      >
        
        
       {
         listColor?.map((a)=>{
           return(
            <SwiperSlide> <a href="#"> <img src={a.img} alt="" /></a></SwiperSlide>
           )

         })
       }
        
      </Swiper>
        </div>
        <div className={" productcard__slide__nextProduct productcard__slide__nextProduct__"+index}>
          <i class="bx bx-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
