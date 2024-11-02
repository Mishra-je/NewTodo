import React from "react";
import Header from "../Common/Header";
import CreateTask from "../Common/CreateTask";
import AllTask from "../Common/AllTask";

const AdminDashboard = (props) => {
  return (
<div className="bg-black h-screen w-full p-10">
  <Header changeUser={props.changeUser} />
    <CreateTask/>
    <AllTask/>
  
</div>

  );
};

export default AdminDashboard;
