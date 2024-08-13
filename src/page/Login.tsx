import UseAuth from '../hooks/UseAuth'
import AuthFrom from '../AuthFrom/AuthFrom'

const Login = () => {
    const {handleLogin} = UseAuth() 
  return (
<div className="container">
<div>Login</div>
<AuthFrom onSubmit={handleLogin}/>
</div>
  )
}

export default Login