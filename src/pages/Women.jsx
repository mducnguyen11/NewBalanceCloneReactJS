import React from 'react'
import FilterPrduct from '../compenents/FilterProduct'
import MainProducts from './MainProducts'

import { useState } from 'react'

const FakeDataListProducts = [

    {
        img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440",
        name:"Fresh Fsgg 860v12",
        tags:["Shoes"  , "Sport" , "40" , "60" , "Boston", "250"],
        price:"$134.99",
        type:"Mens runnig",
        listColor:[
          {
            img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          },
          {
            img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          },{
            img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          },
          {
            img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,
          {
            img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,
          {
            img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,{
            img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,{
            img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
        ]
      }
      ,
      {
        img:"https://nb.scene7.com/is/image/NB/mx608wr5_nb_02_i?$pdpflexf2$&wid=440&hei=440",
        name:"Fresh Foam X 860v12",
        tags:["Shoes"  , "40" , "60" , "NYRR", "250"],
        price:"$134.99",
        type:"Mens runnig",
        listColor:[
          {
            img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          },
          {
            img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          },{
            img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          },
          {
            img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,
          {
            img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,
          {
            img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,{
            img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
          ,{
            img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
          }
        ]
      }
      ,
    { 
      img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Foam X 860v12",
      tags:["Shoes"  , "30" , "40" , "Boston", "245"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    },
    {
      
      img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Foam X 860v12",
      tags:["Shoes"  , "35" , "45" , "Boston College", "255"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    },
    {
      img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Foam X 860v12",
      tags:["Shoes"  , "40" , "60" , "Boston College", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    },
    {
      img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Foam X 860v12",
      tags:["Shoes"  , "40" , "Sport" , "60" , "Boston College", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    },
    {
      img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Fsgg 860v12",
      tags:["Shoes"  , "Sport" , "40" , "60" , "Boston", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    }
    ,
    {
      img:"https://nb.scene7.com/is/image/NB/mx608wr5_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Foam X 860v12",
      tags:["Shoes"  , "40" , "60" , "NYRR", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/m860m12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860n12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/m860s12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    }
    ,
    {
      img:"https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Foam X 860v12",
      tags:["Clothing"  , "40" , "60" , "NYRR", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/mt21540ngo_nb_70_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/mt21540oth_nb_70_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/mt21540ngo_nb_70_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    }
    ,
    {
      img:"https://nb.scene7.com/is/image/NB/mt21262ag_nb_70_i?$pdpflexf2$&wid=440&hei=440",
      name:"Fresh Foam X 860v12",
      tags:["Clothing" , "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:"https://nb.scene7.com/is/image/NB/mt21540ngo_nb_70_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/mt21540oth_nb_70_i?$pdpflexf2$&wid=440&hei=440"
        },{
          img:"https://nb.scene7.com/is/image/NB/mt21540ngo_nb_70_i?$pdpflexf2$&wid=440&hei=440"
        },
        {
          img:"https://nb.scene7.com/is/image/NB/m860t12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/ml574eh2_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,
        {
          img:"https://nb.scene7.com/is/image/NB/mroavch_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/ms574ysa_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
        ,{
          img:"https://nb.scene7.com/is/image/NB/mx608wn5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        }
      ]
    }
    
  ]


const Women = ()=>{

    const [showFilter, setShowFilter] = useState(true)
    const [DataProducts, setDataProducts] = useState(FakeDataListProducts)
    const [presentProducts , setPresentProducts] = useState([...DataProducts])

    const changeShowFilter = () =>{
        setShowFilter(!showFilter)
    }
    const FilterProducts = (a) =>{
        console.log(a)
      let newdata   = DataProducts.filter((p) =>{
            if(p.tags.includes(a)){
                return p
            }
      })
      console.log(newdata)
      
      setPresentProducts([...newdata])

    }

    return(
        <div  className='menpage'>
            <div className=" dpflex spaceTop container">
            {showFilter? <FilterPrduct page ="Women" DataProducts ={FilterProducts}/> : null}
            <MainProducts page="Women" statusFilter={showFilter} showFilter={changeShowFilter} DataProducts = {[...presentProducts]}/>
            </div>

        </div>
    )
}

export default Women