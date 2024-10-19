import React from 'react'
import Header from '../others/Header'
import TasklistNumbers from '../others/TasklistNumbers'
import Tasklist from '../Task/Tasklist'

const EmpolyeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen '>
        <Header/>
        <TasklistNumbers/>
        <Tasklist/>
    </div>
  )
}

export default EmpolyeeDashboard