import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const Handlesubmit = (e) => {
        e.preventDefault();
        console.log(`Email is ${email} and Password is ${password}`)
        handleLogin(email,password)
        console.log("Data submitted !")
        setEmail("");
        setPassword("")
    }
  return (
    <div className='grid place-items-center h-screen bg-black mx-auto w-screen'>
    <div className='border-2 border-emerald-600 p-10 rounded-xl max-w-sm w-full'>
        <form onSubmit={(e) => Handlesubmit(e)} className='flex flex-col items-center justify-center'>
            <input
                type='text'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='border-2 bg-black border-emerald-600 placeholder:text-white text-white rounded-lg py-3 px-5 outline-none text-xl w-full'
                placeholder='Enter your email'
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-2 border-emerald-600 bg-black placeholder:text-white text-white mt-4 rounded-lg py-3 px-5 outline-none text-xl w-full'
                placeholder='Enter Password'
            />
            <button className='border-none bg-emerald-600 text-white rounded-full mt-5 py-3 px-5 outline-none text-xl w-full'>
                Login
            </button>
        </form>
    </div>
</div>


  ) 
}

export default Login