// import Product from "./components/product"; 
import React from "react";
import ProductList from "./components/productList/ProductList";
 import { useState } from 'react'

function App(){
    const [products, setProducts] = useState([
            {id:1, Name:'Computer'},
            {id:2, Name:'Car'},
            {id:3, Name:'Phone'},
            {id:4, Name:'HOuse'},
        ]);
 const deleteProducts = (id)=>{
    setProducts(products.filter((item)=> item.id !== id))

}    
    // const products =;
    return(
        <div className="container">
     <ProductList  products={products} onDelete={deleteProducts} />
        </div>
    )

}
export default App


// export default function MyApp(){
//     return(
//         <div>
//             <h1>wellocme to my App</h1>
//             <MyBatton/>
//         </div>
//     )
// }
// function MyBatton(){
//     return(<button>my Button</button>)
// }




// import {Component} from "react";

// //Calss Based Component
// class App extends Component{
//     //render() return an react element or jsx
//     render(){
//         return(
//         <><h1>hello my world</h1> <h2>this is the react world</h2></>

//         ) 

//     }
//  function  MyBtton(params) {
    
//  }
// }
// export default App;

//Function based Component

// function Listt(){
//     return(
//         <ul>
//             <li>a</li>
//             <li>b</li>
//             <li>c</li>
//             <li>d</li>
//         </ul>
//     );
// }
// export default (Listt);
