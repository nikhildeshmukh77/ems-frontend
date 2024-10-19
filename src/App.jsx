import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmpolyeeDashboard from './Components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
function App() {
  
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // },[])

  const[user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  
  useEffect(() => {
    const loggedInUser  = localStorage.getItem("loggedInUser")
  },[authData])

  const handleLogin = (email,password) =>{
    console.log(email,password)
    if(authData && authData.admin.find((e) => e.email == email && e.password == 123)){
      setUser('Admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e) => e.email == email && e.password == 123)){
      setUser('Employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
    }else{
      alert("Invalid")
    }
  }

  return (
    <>
     {!user ?  <Login handleLogin={handleLogin}/> : ''}
     {user == 'Admin'  ? <AdminDashboard/> : <EmpolyeeDashboard/>}
    </>
  )
}

export default App
