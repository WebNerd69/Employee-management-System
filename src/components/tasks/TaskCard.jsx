import React from 'react'

const TaskCard = () => {
     return (
          <div className='w-[25%] min-w-52 md:min-w-96 md:min-h-64 min-h-80 bg-[#ffe5d4] rounded-xl relative'>

               <div className='flex justify-between px-5 pt-4 pb-2'>

                    <p className='font-medium text-2xl text-zinc-950'>Title</p>

                    <p className='font-medium text-xl bg-green-300 px-3 py-1 rounded-md'>Priority</p>
               </div>

               <p className='px-5 text-black font-medium'>Deadline : <span className='text-red-400'>dd/mm/yyyy</span></p>

               <p className='px-5 text-black py-2'>Description</p>

               <div className='flex justify-end gap-4 px-5 absolute bottom-4 w-full'>

                    <button type='button' className='px-4 py-2 rounded-xl bg-[#6a8d73] font-medium hover:bg-[#85b190]'>Read More</button>

                    <button type='button' className='px-4 py-2 rounded-xl bg-[#f4fdd9] text-black font-medium hover:bg-[#dae5b8]'>Mark as done</button>
               </div>
          </div>
     )
}

export default TaskCard
