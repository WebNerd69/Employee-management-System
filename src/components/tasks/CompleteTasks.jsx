import React from 'react'

const CompleteTasks = ({data}) => {
     return (
          <div className='w-[20%] py-10 px-10 font-bold flex flex-col items-start justify-start bg-[#ffd166] rounded-xl gap-4 min-w-56'>
               <p className='font-bold text-3xl'>{data.taskCount.completed}</p>
               <p className='font-bold text-3xl'>Completed Tasks</p>
          </div>
     )
}

export default CompleteTasks
