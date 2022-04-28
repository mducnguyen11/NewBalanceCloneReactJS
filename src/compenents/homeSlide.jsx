import "./homeSlide.scss";
import slideImg from '../assets/images/mainSlide.jpg'

const HomeSlide = (props) =>{


    return(
       <div className="home__slide">
          <a href="HAHA">
               <img src={slideImg} alt="" />
               <div className="home__slide__content">
                   <h1>MAKE with pride</h1>
                   <h1>MAKE by AMERICA</h1>
                   <div className="haha"></div>
                   <span>The made in USA collections</span>
                   
                   <button>Explore</button>
                   <p>New Balance MADE U.S. footwear contains a domestic value of 70% or more. MADE makes up a limited portion of New Balance’s U.S. sales. </p>
                   
               </div>
               
          </a>

       </div>
    )
}

export default HomeSlide