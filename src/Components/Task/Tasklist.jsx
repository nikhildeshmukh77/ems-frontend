import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  console.log(data) ;
  return (
    <div id='tasklist' className='h-[55%] flex overflow-x-auto items-center justify-start w-full gap-5 flex-nowrap py-10 mt-10'>
      {data.tasks.map((elem,id) => {
        if(elem.active){
          return <AcceptTask key={id}/>
        }
        if(elem.newTask){
          return <NewTask key={id}/>
        }
        if(elem.completed){
          return  <CompleteTask key={id}/>
        }
        if(elem.failed){
          return <FailedTask key={id}/>
        }
      })}
    </div>
  )
}

export default Tasklist