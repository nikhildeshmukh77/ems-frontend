import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 rounded-lg p-20'>
            <form onSubmit={(e) => submitHandler(e)} action="" className='flex flex-col items-center justify-center gap-8'>
                <input onChange={(e) => setEmail(e.target.value)} value={email} required className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl bg-transparent text-white' type="email" placeholder='Enter Your Email' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} required className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl bg-transparent text-white' type="password" placeholder='Enter Password' />
                <button className='border-2 border-emerald-400 rounded-full py-4 px-5 text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login