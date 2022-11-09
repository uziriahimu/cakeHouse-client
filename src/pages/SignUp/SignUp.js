import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const [user, setUser] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        console.log(user)

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)

                form.reset();
            })
            .catch(error => console.log(error))


    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='w-1/2 mx-auto border rounded-lg p-5 bg-gray-100' >
            <form onSubmit={handleSubmit} className="card-body  bg-slate-300 mb-3 rounded">
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
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-purple-500 border-none" type="submit" value="Sign Up" />
                </div>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>

            <div className='text-center'>
                <button className='btn btn-outline btn-error mt-5 px-32' onClick={handleGoogleSignIn}>Google</button>

            </div>
        </div>
    );
};

export default SignUp;