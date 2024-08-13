import React from 'react'
import ProductFrom from '../AuthFrom/ProductFrom'
import UseProduct from '../hooks/UseProduct'



const Edit = () => {
    const {handleEdit} = UseProduct()
  return (
<div className="container">
<div>Edit</div>
<ProductFrom onSubmit={handleEdit}/>
</div>
  )
}

export default Edit