import React from 'react'
import { useForm } from 'react-hook-form'

import { ProductsInput } from '../type/product'


type ProductProps = {
    onSubmit: (value: ProductsInput) => void,
}

const ProductForm = ({ onSubmit }: ProductProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ProductsInput>()
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputtitle1" className="form-label">title </label>
                    <input type="text" className="form-control" id="exampleInputtitle1" aria-describedby="titleHelp"
                        {...register('title', { required: 'Required', })} />
                    {errors.title && (<div id="titleHelp" className="form-text">{errors.title.message}</div>)}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputtitle1" className="form-label">price </label>
                    <input type="text" className="form-control" id="exampleInputtitle1" aria-describedby="titleHelp"
                        {...register('price', { required: 'Required', min:{ value:1, message:' gia k duoc am' } })} />
                    {errors.price && (<div id="price" className="form-text">{errors.price.message}</div>)}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputtitle1" className="form-label">description </label>
                    <input type="text" className="form-control" id="exampleInputtitle1" aria-describedby="titleHelp"
                        {...register('description', { required: 'Required', })} />
                    {errors.description && (<div id="titleHelp" className="form-text">{errors.description.message}</div>)}
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputtitle1" className="form-label">category </label>
                    <select className="form-select"   {...register('category', { required: 'Required', })} >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
            </div>
    )
}

export default ProductForm