import "./MainProducts.scss";
import ProductCard from "../compenents/ProductCard";
import { useState } from "react";



const MainProducts = (props) => {

    const {showFilter, page , statusFilter, DataProducts } = props

    // const [DataProducts , setDataProducts] = useState(FakeDataListProducts)

    const FilterProduct = (a) =>{

    }
  return (
    <div className="productsPage">
      <div className="productsPage__header">
        <h2>{page}</h2>
        <div className="productsPage__header__operation">
          <div onClick={()=>{
              showFilter();
          }} className="productsPage__header__operation__hideFilter">
            <i class="bx bx-transfer"></i>
            <span>{statusFilter? "Hide Filter" :"Show Filter"}</span>
          </div>
          <div className="productsPage__header__operation__soft">
            <select>
              <option value="">cvcv</option>

              <option selected>AXX</option>
              <option value="">cvcv</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" productsPage__container">
          {
            DataProducts.map((a,index)=>{
              return(
                <ProductCard {...a } index = {index}/>
              )
            })
          }

      </div>
    </div>
  );
};

export default MainProducts;
