import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(name , email , password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                event.target.reset();
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero py-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center grid md:grid-cols-2 lg:text-left">
                    <img src={img} alt="" />
                </div>
                <form onSubmit={handleSignup} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">SignUp</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-white border-0" type="submit">Signup</button>
                        </div>
                    </div>
                    <p className='py-5 text-lg font-semibold text-center'>Alrady Have An Account <Link className='text-orange-500' to='/login'>Please Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;