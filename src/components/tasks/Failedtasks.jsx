import React from 'react'

const Failedtasks = ({data}) => {
     return (
          <div className='w-[20%] py-10 px-10 font-bold flex flex-col items-start justify-start bg-[#ef476f] rounded-xl gap-4 min-w-56'>
               <p className='font-bold text-3xl'>{data.taskCount.failed}</p>
               <p className='font-bold text-3xl'>Failed Tasks</p>
          </div>
     )
}

export default Failedtasks
