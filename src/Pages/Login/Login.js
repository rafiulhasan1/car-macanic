import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email , password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            event.target.reset();
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero py-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center grid md:grid-cols-2 lg:text-left">
                    <img src={img} alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-orange-600 text-white border-0" type="submit">Login</button>
                        </div>
                    </div>
                    <p className='py-5 text-lg font-semibold text-center'>You Have No Account <Link className='text-orange-500' to='/signup'>Please Signup</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;