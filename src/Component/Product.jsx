import { Component } from "react";

class Product extends Component{
    
    state ={
        count:0,

    }
    render(){
        
        return(<>
        <div className="mt-5 p-4 mx-5 ">
            <span className="p-5 m-5  bg-dark rounded-1 text-danger ">Laptop</span>
            <span className="badge m-5 bg-dark p-3">{this.Counter()}</span>
            <span onClick={this.incremetHandler} className="btn btn-sm btn-info m-2 ">+</span>
            <span onClick={this.decremntHandler} className="btn btn-sm btn-danger m-2 ">-</span>
            <span className="btn btn-lg btn-primary m-2 ">Delete</span>

        </div>
        </>)
    }

    Counter(){
    if (this.state.count ===0){
        return 'Xreo'
    }else{
       return this.state.count;
    } 
    }

    incremetHandler =()=>{
        const {count} = this.state;
        this.setState({count: count +1})
    }
    decremntHandler = ()=>{
        const {count} = this.state;
        this.setState({count: count-1})
    }

}

export default Product;