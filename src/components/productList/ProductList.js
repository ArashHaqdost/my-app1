import Product from "../Product/Product";

const ProductList = ({products,onDelete})=>{
 return(
    <div className="">
        {products.map((item)=>{
            return <Product  id={item.id} product={item} onDelete={onDelete} />
        })}
    </div>
 )
}

export default ProductList;