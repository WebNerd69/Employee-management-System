import React from 'react'
import { useState } from 'react';
function Login() {
     const [password, setPassword] = useState(true);
     const showPassword = () => {
          setPassword(!password);
     }
     return (
          <div className='flex flex-col items-center justify-center h-[70%] w-[25%] rounded-3xl bg-zinc-900'>
               <form action="" className='flex flex-col gap-4 w-[90%] h-full p-4 items-center'>
                    {/* <h1 className='text-4xl font-semibold text-blue-400 mt-10 mb-36'>Login</h1> */}
                    <div className='flex items-center justify-center mb-24 mt-10'>
                         <img src="/user-2-line copy.png" alt="" className='w-10' />
                         
                          
                    </div>
                    <div className='flex flex-col gap-6 w-full items-center justify-center relative'>
                         <input type="email" placeholder='Username' className='p-3 rounded-full pl-6 bg-zinc-700 w-[80%] text-blue-400' />
                         <input type={password ? "password" : "text"} placeholder='Password' className='p-3 rounded-full pl-6 bg-zinc-700 w-[80%] text-blue-400' />
                         <button type='button' className='absolute top-[37%] right-0' onClick={showPassword}>{password ? <i className="ri-eye-close-line text-xl text-blue-500 hover:text-blue-400"></i> : <i className="ri-eye-line text-xl text-blue-500 hover:text-blue-400"></i>}</button>
                         <button type='submit' className='bg-blue-500 p-2 w-1/3 rounded-2xl font-semibold hover:bg-blue-100 hover:text-blue-500  '>Login</button>
                         <p className='text-blue-600 hover:text-blue-400 text-sm'>Forgot Password?</p>
                    </div>
               </form>
               <p className='text-blue-600 hover:text-blue-400 text-sm mb-10 '>Don't have an account? Register</p>
          </div>
     )
}

export default Login
