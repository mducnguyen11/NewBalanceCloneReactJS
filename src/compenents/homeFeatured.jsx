
import "./homeFeatured.scss";

const HomeFeatured = () =>{


    return(

        <div className="homefeatured">
            <div className="homefeatured__title">
            New Balance MADE U.S. footwear contains a domestic value of 70% or more. MADE makes up a limited portion of New Balance’s U.S. sales. 
            </div>

            <div className="homefeatured__container">
                <div className="homefeatured__container__product">
                    <a href="#"><img src="https://saigonsneaker.com/wp-content/uploads/2018/09/giay-new-balance-chinh-hang.jpg" alt="" /></a>
                    <h3 className="homefeatured__container__product__name">
                        574 Core
                    </h3>
                    <span className="homefeatured__container__product__intro"> We're making our most iconic model, better — the 574, made in part with environmentally preferred materials. </span>
                    <div className="homefeatured__container__product__btn">
                    <a href="#"> <button> Shop now </button></a>
                    </div>
                    <span className="homefeatured__container__product__description"> This 574 meets New Balance’s green leaf standard with an upper made of 50% or more recycled content and leather that supports more responsible manufacturing through the Leather Working Group. The outsole material contains 5% recycled content. Learn more about New Balance’s green leaf standard at newbalance.com/env</span>
                </div>
                <div className="homefeatured__container__performance ">
                    <a href="#"><img src="https://saigonsneaker.com/wp-content/uploads/2018/09/giay-new-balance-chinh-hang.jpg" alt="" /></a>
                    <h3 className="homefeatured__container__product__name">
                        574 Core
                    </h3>
                    <span className="homefeatured__container__product__intro"> We're making our most iconic model, better — the 574, made in part with environmentally preferred materials. </span>
                    <div className="homefeatured__container__product__btn">
                    <a href="#"> <button> Shop men </button> <button> Shop men </button></a>
                    </div>


                </div>
            </div>

        </div>
    )
}



export default HomeFeatured;