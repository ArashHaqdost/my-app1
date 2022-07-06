import { Component } from "react";
import '../product.css';

const Product = ({title})=>{
    const titleHandler = ()=>{
        console.log((title))
    }
    return(
    <div className="container">
        <div className="product">{title}</div>
    <div>
        <button className="btn" onClick={titleHandler}>Titel</button>
    </div>
    </div>
    )
}

export default Product
// class List extends Component{
//     state = {
//         count: this.props.count,
//     }
//     render(){
//         return(<div>
//             <span>{this.props.productName}</span>
//             <span style={{margin: "10px"}}>{this.format()}</span>
//             <button onClick={this.increse}>+</button>
//             <button onClick={this.decrese}>-</button>
//             <button onClick={this.delete}>delete</button>
//         </div>)
//     }
//     format(){
//         if(this.state.count ===0){
//             return 'Zero';
//         }else{
//             return this.state.count;
//         }
//     }
//     increse = ()=>{
//         const {count} = this.state;
//         this.setState({count: count + 1})
//     }
//     decrese = ()=>{
//         const {count}= this.state;
//         this.setState({count: count -1})
//     }
//     delete = ()=>{
//         return "delete";
//     }
// }

// export default List;