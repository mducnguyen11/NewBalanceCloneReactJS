import './FilterPrduct.scss';
import FilterPrductOption from './FilterProductOption';

const ListDataFilter = [
    {
        name:"Product type",
        listOption : [
            {
                OptionName:"Shoes",
                quantity: 100,
                value:""
            },
            {
                OptionName:"Clothing",
                quantity: 200,
                value:""
            },
            {
                OptionName:"Sport",
                quantity: 700,
                value:""
            }
        ],
        typeInput:"radio"
    },{
        name:"Collection",
        listOption:[
            {
                OptionName:"Boston College",
                quantity:5,
                value:""
            }
            ,{
                OptionName:"Boston",
                quantity:2,
                value:""
            },
            {
                OptionName:"NYRR",
                quantity:2,
                value:""
            }
        ],
        typeInput:"radio"   
    },
    {
        name:"Model",
        listOption:[
            {
                OptionName:"245",
                quantity:5,
                value:""
            }
            ,{
                OptionName:"250",
                quantity:2,
                value:""
            },
            {
                OptionName:"255",
                quantity:2,
                value:""
            },
            {
                OptionName:"260",
                quantity:2,
                value:""
            }
        ],
        typeInput:"radio"   
    },
    {
        name: "Gender neutral clothing size ",
        listOption:[
            {
                OptionName:"U1",
                value:"",
                quantity:false
            },
            {
                OptionName:"U2",
                value:"",
                quantity:false
            },
            {
                optionName:"U3",
                value:"",
                quantity:false
            }
        ],  
        typeInput:"text"
    },
    {
        name: "Men wearther size",
        typeInput:"rectangle",
        listOption:[
            {
                OptionName:30,
                
            },
            {
                OptionName:35,
                
            },
            {
                OptionName:40,
                
            },
            {
                OptionName:45,
                
            },
            {
                OptionName:50,
                
            },
            {
                OptionName:55,
                
            },
            {
                OptionName:60,
                
            },
            {
                OptionName:70,
                
            }
        ]
    }
]




const FilterPrduct = ({DataProducts, page}) =>{
    
    const FilterProducts = (a)=>{
        DataProducts(a)
    }

    return(
        <div className="filterproduct">
            <h6>{page}</h6> 
            <div className="filterproduct__linklist">
            <a href="#" className="filterproduct__link">Shoes</a>
            <a href="#" className="filterproduct__link">Clothing</a>
            <a href="#" className="filterproduct__link">Sport</a>
            <a href="#" className="filterproduct__link">Accessories-and-gear</a>
            </div>
            

            {
                ListDataFilter.map(a =>{
                    return(
                        <FilterPrductOption FilterProducts={FilterProducts} DataFilter={a} />
                    )
                })
            }


           
        </div>
    
    )
}

export default FilterPrduct;