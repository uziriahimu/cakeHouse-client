import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hook/useTitle';

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext)
    useTitle('Login')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                if (user.email) {
                    navigate(from, { replace: true });
                }
                else {

                    toast.error('Something went wrong.')
                }
                form.reset();


            })
            .catch(error => console.log(error))



    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }

    return (
        <div className=' border rounded-lg p-5  bg-gray-100 lg:w-1/2 mx-auto' >
            <form onSubmit={handleSubmit} className="card-body  bg-slate-300 mb-3 rounded">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-purple-400 border-none" type="submit" value="Login" />
                </div>
            </form>
            <p className='text-center'> New to this website <Link className='text-orange-600 font-bold ' to='/signup'>Sign Up</Link></p>

            <div className='text-center'>
                <button className='btn btn-outline btn-error mt-5 px-32' onClick={handleGoogleSignIn}>Google</button>

            </div>

        </div>
    );
};

export default Login;