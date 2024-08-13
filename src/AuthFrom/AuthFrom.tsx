import React from 'react'
import { useForm } from 'react-hook-form'
import { UsersInput } from '../type/User'


type AuthFromProps = {
    onSubmit: (data: UsersInput) => void,
}

const AuthFrom = ({onSubmit}:AuthFromProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<UsersInput>()
  return (
    <div>
<form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    {...register('email', {required:'Required', pattern:{
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address"
  
    }})} />
    { errors.email &&(    <div id="emailHelp" className="form-text">{errors.email.message}</div>)}

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
       {...register('password',{required:'Required'})}/>
        { errors.email &&(    <div id="emailHelp" className="form-text">{errors.email.message}</div>)}
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
  )
}

export default AuthFrom