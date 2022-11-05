import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivetRouter = ({children}) => {

    const {user , loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <h2 className='text-3xl font-bold text-orange-500'>Loading....</h2>
    }
    if(user){
        return children;
    }

    return <Navigate state={{from:location}} replace ></Navigate>
};

export default PrivetRouter;