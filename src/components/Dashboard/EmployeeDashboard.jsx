import React from "react";
import Header from "../other/Header.jsx";
import TaskListNumber from "../other/TaskListNumber.jsx";
import TaskList from "../TaskLists/TaskList.jsx";

const EmployeeDashboard = () =>{
return(
    <div className="p-10 bg-[#1C1C1C] h-screen text-white ">
    <Header/>
    {/* <div>Employee Dashboard</div> */}
    <TaskListNumber/>
    <TaskList/>
    {/* <Footer/> */}
    </div>
)
}

export default EmployeeDashboard;