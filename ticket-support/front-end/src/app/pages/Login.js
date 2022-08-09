import React, {useState} from 'react'

function Login() {
    const [getForm,setForm] =useState({
        password:"",
        email:"",
       
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
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(e);
    }
  return (
        <>
            <h2 className='text-center'> Login</h2>
            <form onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={getForm.email} type="email" required className="form-control" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  onChange={onChange} value={getForm.password} type="password" required className="form-control" name="password" />
                </div>

                <button className='btn btn-primary w-100 mt-2' type='submit'> Login</button>
            </form>
        </>
  )
}

export default Login