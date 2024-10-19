import React from 'react'
import Header  from '../others/Header'
import CreateTasks from '../others/CreateTasks'
import AllTasks from '../others/AllTasks'

const AdminDashboard = ({data}) => (
    <div className='h-screen w-full p-7 '>
        <Header data = {data} />
        <CreateTasks data = {data}/>
        <AllTasks data = {data}/>
    </div>
)

export default AdminDashboard