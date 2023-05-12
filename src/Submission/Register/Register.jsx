/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {

    const {newUser, GoogleRegister} = useContext(AuthContext)
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(null)



    const handleRegister = e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        newUser(email, password)
        .then(result =>{
            const Registered = result.user;
            setUser(Registered)
            form.reset()
        })
        .catch(error =>{
            setErr(error.message)
            form.reset()
        })
    }

    const GoogleSigned = () =>{
        GoogleRegister()
        .then(result =>{
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-12 mt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-9 lg:text-left">
                    <img src={img} alt="" />
                </div>

                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center font-bold text-3xl pt-5 pb-0'>Register</h2>
                    <div className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <small className='text-center text-base mt-3'>Or Register With</small>

                        <div className='flex gap-7 justify-center items-center'>
                            <button><span className='text-xl text-blue-700'><FaFacebook></FaFacebook></span></button>
                            <button onClick={GoogleSigned}><span className='text-xll text-red-600'><FaGoogle></FaGoogle></span></button>
                        </div>
                        <p className='text-center'>Already have an account? <Link to='/login' className='underline text-cyan-600 font-semibold'>Log In Now</Link></p>

                        <p className='text-center text-lg text-red-500 font-semibold'>{err}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;