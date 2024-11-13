import React from 'react'
import { useState } from 'react'

const AdminDash = () => {
     const [title, setTitle] = useState('');
     const [desc, setDesc] = useState('');
     const [username, setUsername] = useState('');
     const [priority, setPriority] = useState('');
     const [date, setDate] = useState('');

     const handleTitleChange = (e) => setTitle(e.target.value);
     const handleDescChange = (e) => setDesc(e.target.value);
     const handleUsernameChange = (e) => setUsername(e.target.value);
     const handlePriorityChange = (e) => setPriority(e.target.value);
     const handleDateChange = (e) => setDate(e.target.value);
     return (
          <div className='w-screen h-screen flex justify-center items-center flex-col'>

               <div className='flex w-full justify-between items-center py-7 px-14 '>
                    <p className='font-medium text-3xl'>Hello! <br /> <span className='font-bold text-4xl'>Admin 👋</span></p>
                    <button type='button' className='py-2 px-4 rounded-lg bg-red-500 hover:bg-red-400 font-medium'>Log out</button>
               </div>

               <div id="mainWork" className='w-screen h-full flex items-center justify-evenly'>
                    <div className='w-[25%] py-10 flex flex-col items-start gap-2 bg-zinc-900 px-10 rounded-xl'>

                         <span className='text-3xl font-semibold'><i className="ri-arrow-left-circle-line font-medium"></i> Create Task</span>

                         <form action="" className='w-full py-10 flex flex-col gap-2 bg-zinc-900 rounded-xl'>

                              <label htmlFor="title" className='font-semibold text-gray-500'>Task title</label>
                              <input type="text" placeholder='Make a ui design' id='title' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e) => {
                                   handleTitleChange(e)
                              }} />

                              <label htmlFor="desc" className='font-semibold text-gray-500'>Description</label>
                              <textarea id="desc" rows="5" placeholder='Description' className='bg-zinc-800 rounded-xl px-4 py-2' onChange={(e) => {
                                   handleDescChange(e)
                              }}></textarea>

                              <label htmlFor="user" className='font-semibold text-gray-500'>Elmpoyee username</label>
                              <input type="text" placeholder='user@gmail.com' id='user' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e) => {
                                   handleUsernameChange(e)
                              }} />

                              <label htmlFor="date" className='font-semibold text-gray-500'>Deadline</label>
                              <input type="text" placeholder='dd / mm / yyyy' id='date' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e) => {
                                   handleDateChange(e)
                              }} />

                              <label htmlFor="priority" className='font-semibold text-gray-500'>Priority</label>
                              <input type="text" placeholder='High / Mid / Low' id='priority' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e) => {
                                   handlePriorityChange(e)
                              }} />

                         </form>

                         <button className='bg-zinc-950 hover:bg-black rounded-lg w-full p-4 font-semibold' type='button'><i className="ri-arrow-left-circle-line font-medium"></i> Create Task</button>
                    </div>

                    <div className='w-[25%] h-[85%] py-10 flex flex-col items-start gap-2 bg-zinc-900 px-10 rounded-xl'>
                         <span className='text-3xl font-semibold'><i className="ri-user-add-line font-medium"></i> Create User</span>

                         <form action="" className='w-full py-10 flex flex-col gap-2 bg-zinc-900 rounded-xl'>
                              <label htmlFor="name" className='font-semibold text-gray-500'>Full Name</label>
                              <input type="text" placeholder='John Doe' id='name' className='bg-zinc-800 rounded-xl px-4 py-2' />

                              <label htmlFor="email" className='font-semibold text-gray-500'>Email</label>
                              <input type="email" placeholder='john@example.com' id='email' className='bg-zinc-800 rounded-xl px-4 py-2' />

                              <label htmlFor="password" className='font-semibold text-gray-500'>Password</label>
                              <input type="password" placeholder='Enter password' id='password' className='bg-zinc-800 rounded-xl px-4 py-2' />

                              <label htmlFor="role" className='font-semibold text-gray-500'>Role</label>
                              <select id="role" className='bg-zinc-800 rounded-xl px-4 py-2'>
                                   <option value="">Select Role</option>
                                   <option value="employee">Employee</option>
                                   <option value="admin">Admin</option>
                              </select>
                         </form>

                         <button className='bg-zinc-950 hover:bg-black rounded-lg w-full p-4 font-semibold ' type='button'>
                              <i className="ri-user-add-line font-medium"></i> Create User
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default AdminDash
