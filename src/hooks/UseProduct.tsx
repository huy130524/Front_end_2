

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProductsInput } from '../type/product';
import { useEffect, useState } from 'react';

const UseProduct = () => {
    const nav = useNavigate();
    const [products, setProduct] = useState<ProductsInput[]>([]);

    const handleAdd = async (value: ProductsInput) => {
        try {
            await axios.post('/products', value);
            window.alert('Thêm sản phẩm thành công');
            nav('/product/list');
        } catch (errors) {
            console.log(errors);
            window.alert('Thêm sản phẩm thành công');
        }
    }
    const getAllProduct = async () => {
        try {
            const { data } = await axios.get('/products');
            setProduct(data)
        } catch (errors) {
            console.log(errors);
            window.alert('Lấy dữ liệu thất bại');

        }
    }
    const handleDelete = async (id: string) => {
        if (confirm('Bạn có chắc chắn muốn xóa không?')) {
            try {
                await axios.delete('/products/' + id);
                getAllProduct();
                window.alert('xoa thanh cong')
            } catch (errors) {
                console.log(errors);
                window.alert('xoa thất bại');

            }
        }
    }
    const handleEdit = async (id: string, value: ProductsInput) => {
        try {
            await axios.put(`/products/${id}`, value);
            window.alert('Cập nhật thành công');
        } catch (errors) {
            console.log(errors);
            window.alert('Cập nhật thất bại');
        }
    }
    useEffect(() => {
        getAllProduct();
    }, []);
    return {
        handleAdd,
        getAllProduct,
        products,
        handleDelete,
        handleEdit

    }
}

export default UseProduct;