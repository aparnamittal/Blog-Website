import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' />
        <input required type='email' placeholder='email' />
        <input required type='password' placeholder='password' />
        <Link to='/' ><button>Login</button></Link>
        <p>error</p>
        <span> You don't have an account?
          <Link to="/Register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login


