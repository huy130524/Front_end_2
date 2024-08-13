import React from 'react'
import UseAuth from '../hooks/UseAuth'
import AuthFrom from '../AuthFrom/AuthFrom'

const Regiter = () => {
    const {handleRegister} = UseAuth() 
  return (
<div className="container">
<div>Regiter</div>
<AuthFrom onSubmit={handleRegister}/>
</div>
  )
}

export default Regiter