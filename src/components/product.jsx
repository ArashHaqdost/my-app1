import  {Component} from 'react';

class product extends Component{
    //attributes
    state ={
        count : 0,
        productName: 'laptop',
    }
    imgUrl = "https://picsum.photos/200";
    render(){
        const list =['hellow react','hellow js', 'hello jsx'];
        const maplist = list.map((items)=> <li>items</li>);
        return(
            <>
            <span>{this.state.productName}  </span>
            <span>{this.format()}</span>
            <button onClick={this.handleIncrement.bind(this)}>+</button>
            <button onClick={this.handlDecrement}>-</button>
            <button onClick={()=>{ this.hndleDelete(44)}}>Delete</button>
            <ul>
                {list.map((item,index) => <li key={index}>{item}</li>)}

            </ul>
            <img src={this.imgUrl}  alt="" />
            </>
        );
    }
    format(){
        if(this.state.count ===  0){
            return <strong>xerow</strong>;

        }else
        { return this.state.count;}
    }
    handleIncrement() {
        this.setState({count : this.state.count +1});
        
       }
       handlDecrement = ()=>{
        console.log('Decrement',this);
       }
       hndleDelete(itemnumber){
        console.log(itemnumber)
       }
        
    
}

export default product;