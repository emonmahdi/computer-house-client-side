import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCreateUserWithEmailAndPassword, useUpdateProfile  } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'


import SocialLogin from '../../Shared/SocialLogin/SocialLogin'
import auth from '../../../firebase.init'
import './Register.css'
import Loading from '../Loading/Loading';


const Register = () => {
  // const [user] = useAuthState(auth);
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const navigate = useNavigate();
 
  if(loading || updating){
    return <Loading></Loading>
  }

  if(user){
    // return navigate('/');
    console.log('user', user);
  }

  



  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


   await createUserWithEmailAndPassword(email, password);
   await updateProfile({ displayName: name })
    // console.log('Updated profile');
    navigate('/'); 
    
  };

  return (
    <div className='register-page w-50 mx-auto bg-light p-4 shadow rounded'>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit} className=''>
        <div className='text-start mb-2'>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' className='form-control' placeholder='Your Name' />
        </div>
        <div className='text-start mb-2'>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' className='form-control' placeholder='Your Email' />
        </div>
        <div className='text-start mb-2'>
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' className='form-control' placeholder='Your Password' />
        </div>
        <div> 
            <input type="submit" value='Register' className='btn btn-dark d-block mt-3' />
        </div>
        <p>Already have an account! <Link to='/login'>Please Login</Link></p>
        <div>
            <p>-------------------OR--------------------</p>
        </div>
      </form>
        <SocialLogin />
    </div>
  )
}

export default Register
