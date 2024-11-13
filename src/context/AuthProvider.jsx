import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
     const [userData,setUserData] = useState()
     useEffect(() => {
          const {employeeData,adminData} = getLocalStorage()
          // console.log(employeeData)
          // console.log(adminData)
          setUserData({employeeData,adminData})
     }, [])
     
     
     return (
          <div>
               <AuthContext.Provider value={userData}>
                    {children}
               </AuthContext.Provider>
          </div>
     )
}

export default AuthProvider
