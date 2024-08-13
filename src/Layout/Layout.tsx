import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = () => {
  const token = localStorage.getItem('token')
 
  return (
    <div>
        {token ?   <Outlet></Outlet> : <Navigate to ={'/login'}/>  }
    </div>
  )
}

export default Layout