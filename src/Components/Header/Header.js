import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='flex justify-around items-center py-5 bg-slate-200'>
            <h3 className='text-2xl font-semibold cursor-pointer'>FireBase</h3>
            <nav className='flex justify-center items-center'>
                <Link className='mr-5 text-xl font-semibold' to='/'>Home</Link>
                <Link className='mr-5 text-xl font-semibold' to='/register'>Register</Link>
                <Link className='mr-5 text-xl font-semibold' to='/products'>Products</Link>
                <Link className='mr-5 text-xl font-semibold' to='/orders'>Orders</Link>
                {
                user?.uid ? <Link className='mr-5 text-xl font-semibold bg-indigo-300 rounded-xl px-2 py-1' to='/login' onClick={()=>signOut(auth)}>Sign Out</Link> : <Link className='mr-5 text-xl font-semibold bg-indigo-300 rounded-xl px-2 py-1' to='/login'>Log in</Link>
                }
                {user?.uid && <span className='py-1 px-2 bg-gray-100 rounded-xl flex justify-center items-center'><img className='w-10 h-10 rounded-full mr-2 ' src={user?.photoURL && user.photoURL} alt="" />{user?.displayName && user.displayName}</span>}
            </nav>
        </div>
    );
};

export default Header;