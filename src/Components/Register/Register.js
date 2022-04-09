import React from 'react';

const Register = () => {
    return (
        <div className='py-20 px-10 bg-indigo-300 '>
            <h1 className='text-3xl my-5'>Register</h1>
            <form action="" >
                <input  className='px-16 py-3 rounded-md m-2 ' type="text" name="" id="" placeholder='Your name'/><br/>
                <input className='px-16 py-3 rounded-md m-2 ' type="email" name="" id="" placeholder='Your email'/> <br/>
                <input className='px-16 py-3 rounded-md m-2 ' type="password" name="" id="" placeholder='Password' /><br/>
                <button className='px-6 py-2 bg-slate-500 rounded-lg hover:bg-black hover:text-white'>Register</button>
            </form>
        </div>
    );
};

export default Register;