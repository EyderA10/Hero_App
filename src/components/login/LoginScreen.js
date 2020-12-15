import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext( AuthContext );
    const handelClick = () => {
        // history.push('/');
        const lastPath = localStorage.getItem('lastPath') || '/';

        const user = {
            name: 'Eyder'
        }
        
        const action = {
            type: types.login,
            payload: user 
        }
        
        dispatch(action);
        
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handelClick }
            >
                Login
            </button>
        </div>
    )
}
