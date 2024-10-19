import React from 'react'
import Header  from '../others/Header'
import CreateTasks from '../others/CreateTasks'
import AllTasks from '../others/AllTasks'

const AdminDashboard = () => (
    <div className='h-screen w-full p-7 '>
        <Header />
        <CreateTasks/>
        <AllTasks/>
    </div>
)

export default AdminDashboard