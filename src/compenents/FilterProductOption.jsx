import { useState, useEffect } from "react";

const FilterPrductOption = (props) => {
  const [showProductOption, setShowProductOption] = useState(false);
  const {FilterProducts , DataFilter } = props

  return (
    <div className="filterproduct__listoption">
      <div className="filterproduct__listoption__option">
        <div
          onClick={() => setShowProductOption(!showProductOption)}
          className="filterproduct__listoption__option__title"
        >
          <span>{DataFilter.name} </span>

          {showProductOption ? (
            <i class="bx bx-minus"></i>
          ) : (
            <i class="bx bx-plus"></i>
          )}
        </div>
        {showProductOption ? (
          <div
            className={
              DataFilter.typeInput == "rectangle"
                ? "filterproduct__listoption__option__listitem flexlistoption"
                : "filterproduct__listoption__option__listitem"
            }
          >
            {DataFilter.listOption.map((a) => {
              switch (DataFilter.typeInput) {
                case "radio":
                  return (
                    <div  className="single__option">
                      <input
                        className="filter__input"
                        name="producttype"
                        onChange={()=>{ FilterProducts(a.OptionName) }}
                        type={DataFilter.typeInput}
                      />
                      <span>
                        {a.OptionName}{" "}
                        {a.quantity ? "(" + a.quantity + ")" : ""}
                      </span>
                    </div>
                  );

                case "text":
                  return (
                    <div onClick={()=>{ FilterProducts(a.OptionName) }}  className="single__option">
                      <span className="filteroption__bluecolor">
                        {a.OptionName}{" "}
                      </span>
                    </div>
                  );
                case "rectangle":
                  return (
                    <span onClick={()=>{ FilterProducts(a.OptionName+"") }}  className="single__option__rectangle">{a.OptionName}</span>
                  );
                default: {
                  return null;
                }
              }
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilterPrductOption;
