import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
// import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/Localstorage";
import { Authcontext } from "./Context/AuthProvider";


const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // },) 

  const [user, SetUser] = useState(null);
  // const Authdata = useContext(Authcontext);
  const [userData,setUserData] = useContext(Authcontext);
  const [Loggedinuserdata , setLoggedinuserdata ] = useState()           
 
  console.log("User data is ",userData);
  
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      // SetUser({ role: "admin" });
      SetUser('admin')
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
      // console.log("Data is", user);
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if(employee){
        // SetUser({ role: "employee" });\
        SetUser('employee')
        setLoggedinuserdata(employee)
      }
      
      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify({ role: "employee",data:employee })
      );
      console.log(`data is ${user}`);
    } else {
      alert("Invalid credentials !🚫");
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('LoggedInUser')
    if(loggedInUser){
      const userdata = JSON.parse(loggedInUser)
      SetUser(userdata.role)
      setLoggedinuserdata(userdata.data)
    }
  },[])

  // useEffect(() => {
  //   if (Authdata) {
  //     const loggedInUser = localStorage.getItem("LoggedInUser");
  //     if (loggedInUser) {
  //       SetUser(loggedInUser.role);
  //     }
  //   }
  // }, []);

  return (
    <>
      {/* <Login/> */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={SetUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={SetUser}  data={Loggedinuserdata} /> : null ) }
    </>
  );
};

export default App;
