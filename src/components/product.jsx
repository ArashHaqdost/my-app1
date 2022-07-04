import { Component } from "react";
import '../product.css';


class product extends Component{
    state ={
        count:0,
        productName:'Laptop'
    }
    render(){
        return(<>
         <span className="mt-t text-info">{this.state.productName}</span>
         <span style={{margin: "10px"}}>{this.format()}</span>
         <button onClick={this.handleIncrese}>+</button>
         <button onClick={this.handleDecrese}>-</button>
         <button onClick={this.handleDelete}>Delete</button>
        </>)
    }
    format(){
        if(this.state.count === 0){
            return "zero";

        }else{
            return this.state.count;
        }

    }
    handleIncrese= ()=>{
        const {count}= this.state;
        this.setState({count:count +1})

    }
    handleDecrese= ()=>{
        const {count} = this.state;
        this.setState({count: count -1});
    }
    handleDelete = ()=>{
        console.log('Delete Items');
    }
}

export default product;