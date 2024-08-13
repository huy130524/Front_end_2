import React from 'react'
import { UsersInput } from '../type/User';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UseAuth = () => {
    const nav = useNavigate();

    const handleRegister = async (value: UsersInput) => {
        try {
            await axios.post('/register', value);
            window.alert('Đăng ký thành công');
            nav('/login');
        } catch (errors) {
            console.log(errors);
            window.alert('Đăng ký thất bại');
        }
    }

    const handleLogin = async (value: UsersInput) => {
        try {
            const { data } = await axios.post('/login', value);
            localStorage.setItem('token', data.accessToken);
            window.alert('Đăng nhập thành công');
            nav('/product/list');
        } catch (errors) {
            console.log(errors);
            window.alert('Đăng nhập thất bại');
        }
    }

    return {
        handleRegister,
        handleLogin
    }
}

export default UseAuth;