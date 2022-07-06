import './Product.css'

const Product = ({product, onDelete})=>{
   

    return (<div className='container'>
        <span className='product '>{product.Name}</span>
        <button className='btn product' onClick={()=> onDelete(product.id)}>Title</button>

    </div>)
}

export default Product;