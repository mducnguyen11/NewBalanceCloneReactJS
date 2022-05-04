import React from 'react'
import FilterPrduct from '../compenents/FilterProduct'
import MainProducts from './MainProducts'

import { useState } from 'react'


import p1 from '../assets/ProductsImg/p1.png'
import p2 from '../assets/ProductsImg/p2.png'
import p3 from '../assets/ProductsImg/p3.png'
import p4 from '../assets/ProductsImg/p4.png'
import p5 from '../assets/ProductsImg/p5.png'
import p6 from '../assets/ProductsImg/p6.png'
import p7 from '../assets/ProductsImg/p7.png'
import p8 from '../assets/ProductsImg/p8.png'
import p9 from '../assets/ProductsImg/p9.png'
import p10 from '../assets/ProductsImg/p10.png'
import p11 from '../assets/ProductsImg/p11.png'
import p12 from '../assets/ProductsImg/p12.png'
import p13 from '../assets/ProductsImg/p13.png'

import a1 from '../assets/ProductsImg/a1.png'
import a2 from '../assets/ProductsImg/a2.png'
import a3 from '../assets/ProductsImg/a3.png'
import a4 from '../assets/ProductsImg/a4.png'
import a5 from '../assets/ProductsImg/a5.png'
import a6 from '../assets/ProductsImg/a6.png'
import a7 from '../assets/ProductsImg/a7.png'
import a8 from '../assets/ProductsImg/a8.png'




const FakeDataListProducts = [
  { 
    id: 8,
    img: p11,
    name:"P1 Fresh Foam X 860v12",
    tags:["Shoes" ,"Sport" , "30" , "40" , "Boston", "255"],
    price:"$134.99",
    type:"Mens runnig",
    listColor:[
      {
        img:p8
      },
      {
        img:p9
      },
      {
        img:p10
      }
      ,
      {
        img:p12
      },
      {
        img:p13
      },
      {
        img:p7
      }
      ,
      {
        img:p8
      },
      {
        img:p9
      }
     
    ]
  },
  { 
    id: 9,
    img: p12,
    name:"P1 Fresh Foam X 860v12",
    tags:["Shoes" ,"Sport" , "30" , "40" , "Boston", "245"],
    price:"$134.99",
    type:"Mens runnig",
    listColor:[
      {
        img:p8
      },
      {
        img:p9
      },
      {
        img:p10
      }
      ,
      {
        img:p11
      },
      {
        img:p13
      },
      {
        img:p7
      }
      ,
      {
        img:p8
      },
      {
        img:p9
      }
     
    ]
  },
  { 
    id: 10,
    img: p13,
    name:"P1 Fresh Foam X 860v12",
    tags:["Shoes" ,"Sport" , "30" , "40" , "NYRR", "245"],
    price:"$134.99",
    type:"Mens runnig",
    listColor:[
      {
        img:p8
      },
      {
        img:p9
      },
      {
        img:p10
      }
      ,
      {
        img:p11
      },
      {
        img:p12
      },
      {
        img:p7
      }
      ,
      {
        img:p8
      },
      {
        img:p9
      }
     
    ]
  },
    { 
      id: 1,
      img: p1,
      name:"P1 Fresh Foam X 860v12",
      tags:["Shoes"  , "35" , "45" , "Boston", "260"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:p2
        },
        {
          img:p3
        },
        {
          img:p4
        }
        ,
        {
          img:p5
        },
        {
          img:p6
        },
        {
          img:p7
        },
        {
          img:p8
        },
        {
          img:p9
        }
       
      ]
    },

    { 
      id: 2,
      img: p2,
      name:"P1 Fresh Foam X 860v12",
      tags:["Shoes" ,"Sport" , "30" , "40" , "NYRR", "245"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:p1
        },
        {
          img:p3
        },
        {
          img:p4
        }
        ,
        {
          img:p5
        },
        {
          img:p6
        },
        {
          img:p7
        }
        ,
        {
          img:p8
        },
        {
          img:p9
        }
       
      ]
    },
    { 
      id: 3,
      img: p3,
      name:"P1 Fresh Foam X 860v12",
      tags:["Shoes" , "30" , "40" , "Boston", "245"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:p1
        },
        {
          img:p2
        },
        {
          img:p4
        }
        ,
        {
          img:p5
        },
        {
          img:p6
        },
        {
          img:p7
        }
        ,
        {
          img:p8
        },
        {
          img:p9
        }
       
      ]
    },
    { 
      id: 4,
      img: p4,
      name:"P1 Fresh Foam X 860v12",
      tags:["Shoes" ,"Sport" , "50" , "60" , "Boston", "245"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:p1
        },
        {
          img:p3
        },
        {
          img:p2
        }
        ,
        {
          img:p5
        },
        {
          img:p6
        },
        {
          img:p7
        }
        ,
        {
          img:p8
        },
        {
          img:p9
        }
       
      ]
    },
    { 
      id: 5,
      img: p8,
      name:"P1 Fresh Foam X 860v12",
      tags:["Shoes" ,"Sport" , "30" , "40" , "Boston", "255"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:p9
        },
        {
          img:p10
        },
        {
          img:p11
        }
        ,
        {
          img:p12
        },
        {
          img:p13
        },
        {
          img:p7
        }
        ,
        {
          img:p8
        },
        {
          img:p9
        }
       
      ]
    },
    { 
      id: 6,
      img: p9,
      name:"P1 Fresh Foam X 860v12",
      tags:["Shoes" ,"Sport" , "30" , "40" , "NYRR", "245"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:p8
        },
        {
          img:p10
        },
        {
          img:p11
        }
        ,
        {
          img:p12
        },
        {
          img:p13
        },
        {
          img:p7
        }
        ,
        {
          img:p8
        },
        {
          img:p9
        }
       
      ]
    },
    { 
      id: 7,
      img: p10,
      name:"P1 Fresh Foam X 860v12",
      tags:["Shoes" ,"Sport" , "55" , "65" , "Boston", "245"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:p8
        },
        {
          img:p9
        },
        {
          img:p11
        }
        ,
        {
          img:p12
        },
        {
          img:p13
        },
        {
          img:p7
        }
        ,
        {
          img:p8
        },
        {
          img:p9
        }
       
      ]
    },
   
    { 
      id: 11,
      img: a1,
      name:"P1 Fresh Foam X 860v12",
      tags:["Clothing" ,"Sport" , "30" , "40" , "Boston College", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:a2
        },
        {
          img:a3
        },
        {
          img:a4
        }
        ,
        {
          img:a5
        },
        {
          img:a6
        },
        {
          img:a7
        }
        ,
        {
          img:a8
        }
       
      ]
    },
    { 
      id: 12,
      img: a2,
      name:"P1 Fresh Foam X 860v12",
      tags:["Clothing" ,"Sport" , "30" , "40" , "Boston College", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:a1
        },
        {
          img:a3
        },
        {
          img:a4
        }
        ,
        {
          img:a5
        },
        {
          img:a6
        },
        {
          img:a7
        }
        ,
        {
          img:a8
        }
       
      ]
    },
    { 
      id: 13,
      img: a3,
      name:"P1 Fresh Foam X 860v12",
      tags:["Clothing" ,"Sport" , "40" , "45" , "Boston College", "250"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:a1
        },
        {
          img:a2
        },
        {
          img:a4
        }
        ,
        {
          img:a5
        },
        {
          img:a6
        },
        {
          img:a7
        }
        ,
        {
          img:a8
        }
       
      ]
    },
   
    { 
      id: 14,
      img: a6,
      name:"P1 Fresh Foam X 860v12",
      tags:["Clothing" ,"Sport" , "30" , "50" , "Boston College", "255"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:a1
        },
        {
          img:a2
        },
        {
          img:a4
        }
        ,
        {
          img:a5
        },
        {
          img:a3
        },
        {
          img:a7
        }
        ,
        {
          img:a8
        }
       
      ]
    },
    { 
      id: 15,
      img: a8,
      name:"P1 Fresh Foam X 860v12",
      tags:["Clothing" ,"Sport" , "30" , "45" , "Boston College", "260"],
      price:"$134.99",
      type:"Mens runnig",
      listColor:[
        {
          img:a1
        },
        {
          img:a2
        },
        {
          img:a4
        }
        ,
        {
          img:a5
        },
        {
          img:a3
        },
        {
          img:a7
        }
        ,
        {
          img:a2
        }
       
      ]
    },
   
   
    
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
      window.scrollTo(0, 0);

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