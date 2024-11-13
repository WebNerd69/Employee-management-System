import React, { useEffect } from 'react'
import {NewTaskCard , ActiveTaskCard, CompletedTaskCard ,FailedTaskCard } from './TaskCard'

const TasksCardSlider = ({data}) => {
     useEffect(()=>{
          const a= window.innerWidth
          document.querySelector('#cardSlider').innerWidth=a-160
     },[window.onresize])
     return (
          <div id='cardSlider' className=' py-24 flex gap-10 overflow-x-scroll mx-20'>
               {
                    data.tasks.map((elem)=>{
                         if(elem.is_accepted){
                              return <ActiveTaskCard props={elem}/>
                         }else if(elem.is_completed){
                              return <CompletedTaskCard props={elem}/>
                         }else if(elem.is_new){
                              return <NewTaskCard props={elem}/>
                         }else if(elem.is_failed){
                              return <FailedTaskCard props={elem}/>
                         }
                    })
               }
               
          </div>
     )
}

export default TasksCardSlider
