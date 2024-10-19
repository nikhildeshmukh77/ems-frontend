import React from 'react'
import Header from '../others/Header'
import TasklistNumbers from '../others/TasklistNumbers'
import Tasklist from '../Task/Tasklist'

const EmpolyeeDashboard = ({data}) => {
  console.log(data);
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen '>
        <Header data={data}/>
        <TasklistNumbers data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default EmpolyeeDashboard