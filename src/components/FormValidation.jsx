import React, { useState } from 'react'

const FormValidation = () => {
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:""
    })
    const [error,setError]=useState({
        usernameError:"",
        emailError:"",
        passwordError:""
    })
    const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@itbhu\.ac\.in$/;

        setError({
            usernameError:"",
            emailError:"",
            passwordError:""
        })
        console.log(error)
        let anyError=false;
        if(formData.username.length<6){
            anyError=true;
            console.log("inside username")
            setError((prevError) => ({
               
                ...prevError,
                usernameError: "Length should be greater than or equal to 6"
              }));
        }
        if(!passwordPattern.test(formData.password)){
            anyError=true; 
            console.log("inside password")
            setError((prevError) => ({
                ...prevError,
                passwordError: "Length should be greater than or equal to 6 one number one special char and on capital letter"
              }));
        }
        if(!emailPattern.test(formData.email)){
            anyError=true;
            setError((prevError) => ({
                ...prevError,
                emailError: "email should originate from @itbhu.ac.in"
              }));
        }
      if(!anyError){
       alert(`${formData.username}`)
      }
    }

      return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
            {error?.usernameError && <p>{error.usernameError}</p>}

            <br />
            <label htmlFor="email">Email </label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
            {error?.emailError && <p>{error.emailError}</p>}
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>
            {error?.passwordError && <p>{error.passwordError}</p>}
            <button type="submit">submit</button>
        </form>
    </>
  )
}

export default FormValidation
