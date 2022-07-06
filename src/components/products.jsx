import React, { Component } from 'react';
import Product from './functional/product';


class Products extends Component {
    state={
        products:[
         {id:1, count:1, productName:'Laptop'},
         {id:2, count:2, productName:'Ipad'},
         {id:3, count:3, productName:'iphone'},
        ]
     }
    render() {
        return (<div>
            {this.state.products.map((p,index)=>(
                <Product key={index} productName={p.productName} count={p.count} />
            ))}
        </div>);
     
    }
}
 
export default Products ;