import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    return (
        <div className='py-20 px-10 bg-indigo-300 '>
            <h1 className='text-3xl my-5'>Welcome Back Please LogIn</h1>
            <button className='px-6 py-2 bg-slate-200 rounded-lg hover:bg-black hover:text-white' onClick={()=>signInWithGoogle()}>Google Sign In </button>
            <form action="" >
                <input className='px-16 py-3 rounded-md m-2 ' type="email" name="" id="" placeholder='Your email'/> <br/>
                <input className='px-16 py-3 rounded-md m-2 ' type="password" name="" id="" placeholder='Password' /><br/>
                <button className='px-6 py-2 bg-slate-500 rounded-lg hover:bg-black hover:text-white'>Log In</button>
            </form>
        </div>
    );
};

export default Login;