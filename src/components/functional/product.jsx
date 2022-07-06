import { useState } from "react";

const Product = (props) => {

    const [Count, setCount] = useState(0);

    return(
    <>
    <span>{props.productName}</span>
    <span>{format()}</span>
    <button onClick={incresed}>+</button>
    <button onClick={()=> decrese(Count,setCount)}>_</button>
    <button >Delete</button>
    </>
    );

    function format(){
        if(Count === 0){
            return "zero";
        }else{
            return Count;
            }
        }
    function incresed(){
        setCount(Count+1);
    }    
    }

function decrese(Count,setCount){
    setCount(Count -1);
}


export default Product;