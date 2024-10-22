import React from 'react'
import { useState } from 'react';
function Login({handleLogin}) {
     // states
     const [hidePassword, setHidePassword] = useState(true);
     const[password,setPassword] = useState('');
     const[username,setUsername] = useState('');

     // functions
     const showPassword = () => {
          setHidePassword(!hidePassword);
     }
     const submitHandler = (e)=>{
          e.preventDefault()
          // console.log(password)
          // console.log(username)
          if(password == ''|| username==''){
               document.querySelector('#passwordInput').style.border='2px solid #e63946'
               document.querySelector('#userInput').style.border='2px solid #e63946'
          }
          else{
               handleLogin(username,password)
          }
     }
     const usernameHandler =(e)=>{
          setUsername(e.target.value)
          document.querySelector('#userInput').style.border='none'
          
     }
     const passwordHandler =(e)=>{
          setPassword(e.target.value)
          document.querySelector('#passwordInput').style.border='none'
     }
     // return component
     return (
          <div className='flex flex-col items-center justify-center  bg-zinc-950 h-screen w-screen'>
               <form action="" className='flex flex-col gap-4 p-4 items-center h-[80%] md:w-[25%] sm:w-[90%] w-[70%] rounded-3xl bg-zinc-900 justify-evenly'>
                    {/* <h1 className='text-4xl font-semibold text-blue-400 mt-10 mb-36'>Login</h1> */}
                    <div className='flex items-center justify-center'>
                         <img src="/user-2-line copy.png" alt="" className='w-10' />
                    </div>
                    <div className='flex flex-col gap-6 w-full items-center justify-center relative'>
                         <input id='userInput' required type="email" placeholder='Username' className='p-3 rounded-full pl-6 bg-zinc-700 w-[80%] text-blue-400' onChange={(e)=>{
                              usernameHandler(e)
                         }} />

                         <input id='passwordInput' required type={hidePassword ? "password" : "text"} placeholder='Password' className='p-3 rounded-full pl-6 bg-zinc-700 w-[80%] text-blue-400' onChange={(e)=>{
                              passwordHandler(e)
                         }} />
                         
                         <button type='button' className='absolute top-[37%] right-0' onClick={showPassword}>{hidePassword ? <i className="ri-eye-close-line text-xl text-blue-500 hover:text-blue-400"></i> : <i className="ri-eye-line text-xl text-blue-500 hover:text-blue-400"></i>}</button>
                         
                         <button type='submit' className='bg-blue-500 p-2 w-1/3 rounded-2xl font-semibold hover:bg-blue-100 hover:text-blue-500  ' onClick={(e)=>{
                              submitHandler(e)
                         }}>Login</button>
                         
                         <p className='text-blue-600 hover:text-blue-400 text-sm'>Forgot Password?</p>
                    </div>
                    <p className='text-blue-600 hover:text-blue-400 text-sm'>Don't have an account? Register</p>
               </form>
          </div>
     )
}

export default Login
