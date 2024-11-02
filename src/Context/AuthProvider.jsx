import React, { createContext, useDebugValue, useEffect, useState } from "react";
import { employee, setLocalStorage } from "../utils/Localstorage";
// import employees, { getLocalStorage, setLocalStorage } from "../utils/Localstorage";

export const Authcontext = createContext(employee);

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const[userData,setUserData] = useState(null)
  
  useEffect(() => {
    setLocalStorage(employee);
    // const{employee} = getLocalStorage();
    console.log("Employee data is ",employee)
    
    
    // employees.push(employee)
    // console.log('employee data is ',employee)
    setUserData(employee)
  },[])

  
  
  return (
    <div>
      <Authcontext.Provider value={[userData,setUserData]} >{children}</Authcontext.Provider>
    </div>
  );
};

export default AuthProvider;
