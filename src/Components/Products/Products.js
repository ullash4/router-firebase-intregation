import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Hellow there How are you !!</h1>
            <h1>{user? user.displayName : 'no One'}</h1>
        </div>
    );
};

export default Products;