import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext  = createContext();  

const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setUserdata] = useState(null);
    
    useEffect(() => {
        const {employees,admin} = getLocalStorage();
        setUserdata({employees,admin})  
        setLocalStorage();
    },[])

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider