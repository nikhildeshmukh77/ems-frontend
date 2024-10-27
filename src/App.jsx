import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmpolyeeDashboard from './Components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'
function App() {

  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // },[])

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      console.log(userData.role);
      setLoggedInUserData(userData.data);
    } 
  })

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
  }, [authData])


  const handleLogin = (email, password) => {
    console.log(email, password)
    if (authData && authData.admin.find((e) => e.email == email && e.password == password)) {
      
      const add = authData.admin.find((e) => e.email == email && e.password == password)
      if(add){
        setUser('admin')
        setLoggedInUserData(add);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
        console.log("into")
      }
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data : employee }))
    } else {
      alert("Invalid")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData} /> : (user == 'employee' ? <EmpolyeeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App
