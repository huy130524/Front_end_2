import ProductFrom from '../AuthFrom/ProductFrom'
import UseProduct from '../hooks/UseProduct'
const Add = () => {
    const {handleAdd} = UseProduct() 
  return (
<div className="container">
<div>Add</div>
<ProductFrom onSubmit={handleAdd}/>
</div>
  )
}

export default Add