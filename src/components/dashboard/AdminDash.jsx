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
               <div className='w-[25%] py-10 flex flex-col items-start gap-2 bg-zinc-900 px-10 rounded-xl'>

                    <span className='text-3xl font-semibold'><i class="ri-arrow-left-circle-line font-medium"></i> Create Task</span>

                    <form action="" className='w-full py-10 flex flex-col gap-2 bg-zinc-900 rounded-xl'>

                         <label htmlFor="title" className='font-semibold text-gray-500'>Task title</label>
                         <input type="text" placeholder='Make a ui design' id='title' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e)=>{
                              handleTitleChange(e)
                         }}/>

                         <label htmlFor="desc" className='font-semibold text-gray-500'>Description</label>
                         <textarea id="desc" rows="5" placeholder='Description' className='bg-zinc-800 rounded-xl px-4 py-2' onChange={(e)=>{
                              handleDescChange(e)
                         }}></textarea>
                         
                         <label htmlFor="user" className='font-semibold text-gray-500'>Elmpoyee username</label>
                         <input type="text" placeholder='user@gmail.com' id='user' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e)=>{
                              handleUsernameChange(e)
                         }} />

                         <label htmlFor="date" className='font-semibold text-gray-500'>Deadline</label>
                         <input type="text" placeholder='dd / mm / yyyy' id='date' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e)=>{
                              handleDateChange(e)
                         }}/>

                         <label htmlFor="priority" className='font-semibold text-gray-500'>Priority</label>
                         <input type="text" placeholder='High / Mid / Low' id='priority' className=' bg-zinc-800 rounded-xl px-4 py-2' onChange={(e)=>{
                              handlePriorityChange(e)
                         }}/>

                    </form>
                    
                    <button className='bg-zinc-950 hover:bg-black rounded-lg w-full p-4 font-semibold' type='button'><i class="ri-arrow-left-circle-line font-medium"></i> Create Task</button>
               </div>
          </div>
     )
}

export default AdminDash
