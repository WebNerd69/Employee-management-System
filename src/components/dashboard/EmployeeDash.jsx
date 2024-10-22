import React from 'react'
import AcceptTasks from '../tasks/AcceptTasks'
import CompleteTasks from '../tasks/CompleteTasks'
import NewTask from '../tasks/NewTask'
import Failedtasks from '../tasks/Failedtasks'
import TasksCardSlider from '../tasks/TasksCardSlider'

const EmployeeDash = () => {
     return (
          <div className='w-screen h-full relative'>
               <div className='flex w-full justify-between items-center py-7 px-14 '>
                    <p className='font-medium text-3xl'>Hello! <br /> <span className='font-bold text-4xl'>Rudra 👋</span></p>
                    <button type='button' className='py-2 px-4 rounded-lg bg-red-500 hover:bg-red-400 font-medium'>Log out</button>
               </div>
               <div className='flex w-full justify-evenly items-center py-7 px-14 flex-wrap gap-4 mt-10'>
                    <AcceptTasks/>
                    <CompleteTasks/>
                    <NewTask/>
                    <Failedtasks/>
               </div>
               <TasksCardSlider/>
          </div>
     )
}

export default EmployeeDash
