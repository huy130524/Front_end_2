import React from 'react'
import UseProduct from '../hooks/UseProduct'

const List = () => {
    const {products,handleDelete} = UseProduct()
   
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {products.map((product, index) => (
    <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        <td>
        {/* <button className='btn btn-pre' onClick={() => handleEdit(product.id)}>Edit</button> */}
        <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
            </td>
    </tr>
))}
    
   
  </tbody>
</table>
    </div>
  )
}

export default List