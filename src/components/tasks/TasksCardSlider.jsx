import React, { useEffect } from 'react'
import TaskCard from './TaskCard'

const TasksCardSlider = () => {
     useEffect(()=>{
          const a= window.innerWidth
          document.querySelector('#cardSlider').innerWidth=a-160
     },[window.onresize])
     return (
          <div id='cardSlider' className=' py-24 flex gap-10 overflow-x-auto mx-20'>
               <TaskCard/>
          </div>
     )
}

export default TasksCardSlider
