import React, { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../../firebase.init'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin'
import Loading from '../Loading/Loading'

import './Login.css'

const Login = () => {
  const [user, loading] = useAuthState(auth);
  
  const [emailRef, setEmail] = useState('');
  const [passwordRef, setPassword] = useState('');
 
  const [
    signInWithEmailAndPassword,
    user2,
    loading2,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  
  if(loading){
    return  <Loading />
  }

  if(user){
      return navigate(from , {replace: true});
  }
  

  const handleSubmit = async(e) => {
    e.preventDefault();  
    await signInWithEmailAndPassword(emailRef, passwordRef);
    // navigate(from, { replace: true });
    navigate('/')
  };


  return (
    <div className='login-page mt-5 w-50 mx-auto bg-light p-4 shadow rounded'>
      <h2>Login Page</h2> 
      <form onSubmit={handleSubmit} className=''> 
        <div className='text-start mb-2'>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Your Email' />
        </div>
        <div className='text-start mb-2'>
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} className='form-control' />
        </div>
        <div> 
            <input type="submit" value='Login' className='btn btn-primary d-block mt-3' />
        </div>
        <p>Create new account! <Link to='/register'>Please Register</Link></p>
        <div>
            <p>-------------------OR--------------------</p>
        </div>
      </form>
      <SocialLogin />
    </div>
  )
}

export default Login
