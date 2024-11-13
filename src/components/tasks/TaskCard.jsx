import React from 'react'

export const NewTaskCard = ({props}) => {

     return (
          <div className='w-[25%] min-w-52 md:min-w-96 md:min-h-64 min-h-80 bg-[#b6dbfc] rounded-xl relative'>

               <div className='flex justify-between px-5 pt-4 pb-2'>

                    <p className='font-medium text-2xl text-zinc-950'>{props.title}</p>

                    {props.priority === 'high' ? (
                        <p className='font-medium text-xl bg-red-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : props.priority === 'medium' ? (
                        <p className='font-medium text-xl bg-yellow-200 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : (
                        <p className='font-medium text-xl bg-green-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    )}
               </div>

               <p className='px-5 text-black font-medium'>Deadline : <span className='text-red-400'>{props.deadline}</span></p>

               <p className='px-5 text-black py-2'>{props.description}</p>

               <div className='flex justify-end gap-4 px-5 absolute bottom-4 w-full'>

                    <button type='button' className='px-4 py-2 rounded-xl bg-[#6a8d73] font-medium hover:bg-[#85b190]'>Read More</button>

                    <button type='button' className='px-4 py-2 rounded-xl bg-[#f4fdd9] text-black font-medium hover:bg-[#dae5b8]'>Accept Task</button>
               </div>
          </div>
     )
}
export const ActiveTaskCard = ({props}) => {

     return (
          <div className='w-[25%] min-w-52 md:min-w-96 md:min-h-64 min-h-80 bg-[#c4f5e8] rounded-xl relative'>

               <div className='flex justify-between px-5 pt-4 pb-2'>

                    <p className='font-medium text-2xl text-zinc-950'>{props.title}</p>

                    {props.priority === 'high' ? (
                        <p className='font-medium text-xl bg-red-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : props.priority === 'medium' ? (
                        <p className='font-medium text-xl bg-yellow-200 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : (
                        <p className='font-medium text-xl bg-green-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    )}
               </div>

               <p className='px-5 text-black font-medium'>Deadline : <span className='text-red-400'>{props.deadline}</span></p>

               <p className='px-5 text-black py-2'>{props.description}</p>

               <div className='flex justify-end gap-4 px-5 absolute bottom-4 w-full'>
                    <button type='button' className='px-4 py-2 rounded-xl bg-yellow-100 text-black font-medium hover:bg-yellow-200'>Completed</button>
                    <button type='button' className='px-4 py-2 rounded-xl bg-red-400 font-medium hover:bg-red-500'>Failed</button>
               </div>
          </div>
     )
}
export const CompletedTaskCard = ({props}) => {

     return (
          <div className='w-[25%] min-w-52 md:min-w-96 md:min-h-64 min-h-80 bg-[#ffe5d4] rounded-xl relative'>

               <div className='flex justify-between px-5 pt-4 pb-2'>

                    <p className='font-medium text-2xl text-zinc-950'>{props.title}</p>

                    {props.priority === 'high' ? (
                        <p className='font-medium text-xl bg-red-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : props.priority === 'medium' ? (
                        <p className='font-medium text-xl bg-yellow-200 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : (
                        <p className='font-medium text-xl bg-green-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    )}
               </div>

               <p className='px-5 text-black font-medium'>Deadline : <span className='text-red-400'>{props.deadline}</span></p>

               <p className='px-5 text-black py-2'>{props.description}</p>

          </div>
     )
}
export const FailedTaskCard = ({props}) => {

     return (
          <div className='w-[25%] min-w-52 md:min-w-96 md:min-h-64 min-h-80 bg-[#fa8ca6] rounded-xl relative'>

               <div className='flex justify-between px-5 pt-4 pb-2'>

                    <p className='font-medium text-2xl text-zinc-900'>{props.title}</p>

                    {props.priority === 'high' ? (
                        <p className='font-medium text-xl bg-red-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : props.priority === 'medium' ? (
                        <p className='font-medium text-xl bg-yellow-200 px-3 py-1 rounded-md'>{props.priority}</p>
                    ) : (
                        <p className='font-medium text-xl bg-green-300 px-3 py-1 rounded-md'>{props.priority}</p>
                    )}
               </div>

               <p className='px-5 text-zinc-900 font-medium'>Deadline : <span className='text-black'>{props.deadline}</span></p>

               <p className='px-5 text-zinc-900 py-2'>{props.description}</p>

          </div>
     )
}

