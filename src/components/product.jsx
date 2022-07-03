import  {Component} from 'react';

class product extends Component{
    count = 0;
    imgUrl = "https://picsum.photos/200";
    render(){
        const list =['hellow react','hellow js', 'hello jsx'];
        const maplist = list.map((items)=> <li>items</li>);
        return(
            <>
            <span>Product Name </span>
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
        if(this.count ===  0){
            return <strong>xerow</strong>;

        }else
        { return this.count;}
    }
    handleIncrement() {
        console.log('incremetn',this)
        
       }
       handlDecrement = ()=>{
        console.log('Decrement',this);
       }
       hndleDelete(itemnumber){
        console.log(itemnumber)
       }
        
    
}

export default product;