import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { auth } from "./Firebase/Firebase"
import shopIcon from "./Images/OIP.jpeg"

const Login = () => {
    const[error,SET_ERROR]=useState({})

    const navigateHome=useNavigate()
    const [userdata, SetUserData]=useState({
        email:"",
        password:"",
    })
    const handlechange=(e)=> {
        let name=e.target.name;
        let value=e.target.value;
        SetUserData({...userdata,[name]: value})
    }

    const handlesubmit = (e) => {
        let showerrormsg={}

        if(userdata.email===""){
            showerrormsg.email="Please Enter yorr Email"
        }
        
        else if(userdata.email.indexOf("@")===0) {
            showerrormsg.email="Invalid Place of @"
        }
         else if(!userdata.email.includes("@")) {
            showerrormsg.email="Invalid Email"

        } 
        else {
            SET_ERROR({email:""});
        }

        if(userdata.password===""){
            showerrormsg.password="Please Enter your Password"
        }else if(userdata.password.length<8){
            showerrormsg.password="Password should contain 8 characters"
        }else if(userdata.password.search(/["@","#","$","%","*","!"]/)==-1){
            showerrormsg.password="Password should contain at least one special character"
        }else if(userdata.password.search(/[0-9]/)==-1){
            showerrormsg.password="Password should contain at least one digit"
        } else{
            SET_ERROR({password:""})
        }
        SET_ERROR(showerrormsg)

        e.preventDefault()
        signInWithEmailAndPassword(auth,userdata.email,userdata.password)
        .then((res)=>{
            navigateHome("/")
            toast.success("Login Succesfully")
        })
        .catch((err) => {
            toast.error(err.message)
        })


    }
    return (
        <>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <img
                    className='mx-auto h-10 w-auto'
                    src={shopIcon}
                    alt='Bala Ji Company'/>
                    <h2 className='mt-10 text-center text-2l font-bold leading-9 tracking-tight text-gray-900'>Sign in to your account</h2>
            </div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className='space-y-6' onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor='email' className='block text-2xl font-medium leading-6 text-gray-900'>Email Address</label>
                        <div className='mt-2'>
                            <input
                                id="email"
                                name="email"
                                type='text'
                                autoComplete='email'
                                onChange={handlechange}
                                className='block w-full h-12 ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300placeholder:text-gray-400 focus:ring-insert focus:ring-indigo-600 sm:text-2xl sm:leading-6'/>
                                <span className='text-xl text-red-500'>{error.email}</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label htmlFor='password' className="block text-2xl font-mediu leading-6 text-gray-900">Password</label>
                    </div>
                    <div className='mt-2'>
                        <input
                            id='password'
                            name='password'
                            type='text'
                            autoComplete='current-password'
                            onChange={handlechange}
                            
                                className='block w-full h-12 ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300placeholder:text-gray-400 focus:ring-insert focus:ring-indigo-600 sm:text-2xl sm:leading-6'/>
                            <span className='"text-xl text-red-500'>{error.password}</span>
                    </div>
                    <div>
                    <a class="https://fakestoreapi.com/product" href="/cart"></a>
                        <button 
                        type='submit'
                        className='flex w-full h-12 justify-center items-centerrounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outlinne-offset-2 focus-visible:outline-indigo-600'>
                            Sign in

                        </button>
                    </div>
                </form>

                <p className='mt-10 text-center text-xl text-gray-500'>
                    Not a member?{' '}
                    <NavLink to="/Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-xl">Signup Here</NavLink>
                </p>
            </div>
            </div></>
    )
}

export default Login