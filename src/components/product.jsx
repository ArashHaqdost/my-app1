import { Component } from "react";
import '../product.css';


class List extends Component{
    state={
        count: 0,
        productName:"Laptop"
    }

    render(){
        return(<>
            <span>{this.state.productName}</span>
            <span style={{margin: "10px"}}>{this.format()}</span>
            <button onClick={this.increse}>+</button>
            <button onClick={this.decrese}>-</button>
            <button onClick={this.delete}>delete</button>
        </>)
    }
    format(){
        if(this.state.count ===0){
            return 'Zero';
        }else{
            return this.state.count;
        }
    }
    increse = ()=>{
        const {count} = this.state;
        this.setState({count: count + 1})
    }
    decrese = ()=>{
        const {count}= this.state;
        this.setState({count: count -1})
    }
    delete = ()=>{
        return "delete";
    }
}

export default List;