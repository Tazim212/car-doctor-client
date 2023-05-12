/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const LogIn = () => {

    const {SignedUser} = useContext(AuthContext);
    const [signed, setSigned] = useState(null)

    const [err, setErr] = useState(null)

    const handleSignedUser = e =>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignedUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            setSigned(loggedUser)
            form.reset()
        }
        )
        .catch(error =>{
            setErr(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-12 mt-9">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-9 lg:text-left">
                    <img src={img} alt="" />
                </div>
                <form onSubmit={handleSignedUser} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center font-bold text-3xl pt-5 pb-0'>Log In</h2>
                    <div className="card-body pt-0">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <small className='text-center text-base mt-3'>Or Sign In With</small>

                        <div className='flex gap-7 justify-center items-center'>
                            <button><span className='text-xl text-blue-700'><FaFacebook></FaFacebook></span></button>
                            <button><span className='text-xll text-red-600'><FaGoogle></FaGoogle></span></button>
                        </div>
                        <p className='text-center'>Don't have an account? <Link to='/signup' className='underline text-cyan-600 font-semibold'>Register Now</Link></p>
                        <p className='text-center text-lg text-red-500 font-semibold'>{err}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;