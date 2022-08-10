import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {actions} from "../../features/auth/authSlice";
function Register() {
    const {isError,isLoading,isSuccess,message, user} = useSelector(a=> a.auth);
    const navigate = useNavigate();
    const dispath = useDispatch();
    useEffect(()=>{
   
        if(isError){
            toast.error(message);  
        }

        if(user  || isSuccess){
            navigate("/");
        }
        dispath(actions.reset());

    },[isError,isLoading,message,isSuccess,user, navigate,dispath])

    const [getForm,setForm] =useState({
        name:"",
        email:"",
        password:"",
        password2:""
    });

    const onChange = (e) =>{
        console.log(e.target.name);
        setForm((prev)=>{
          return {
            ...prev,
            [e.target.name]: e.target.value
          }

        });
    }
    const onFormSubmit = async (e) =>{
        e.preventDefault();
        console.log(getForm);
        dispath(actions.register(getForm));
     
    }
    
  return (
    <>
    <h2 className='text-center'>Register</h2>
        <form onSubmit={onFormSubmit}>
        
            <div className='form-group mt-1'>
                <label>Name</label>
                <input type="text" required value={getForm.name} onChange={onChange} className='form-control' placeholder='Name' name='name' />
            </div>
              
            <div className='form-group mt-1'>
            <label>Email</label>
                <input type="email" required value={getForm.email} onChange={onChange} className='form-control' placeholder='Email' name='email' />
            </div>


            <div className='form-group mt-1'>
            <label>Password</label>
                <input type="password"  required value={getForm.password} onChange={onChange} className='form-control' placeholder='Password' name='password' />
            </div>


            <div className='form-group mt-1'>
            <label>Confirm Password</label>
                <input type="password" required value={getForm.password2 }  onChange={onChange} className='form-control' placeholder='Confirm Password' name='password2' />
            </div>
            {isLoading ?  "Loading" :    <button type='submit' className='btn btn-primary mt-2 w-100'> Register</button>}
         
            <ToastContainer />
        </form>
    </>
  )
}

export default Register