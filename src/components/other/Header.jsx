import React from "react";

const Header = () =>{
    return (
        <div className=" flex justify-between items-center p-4">
            <h1 className="text-2xl font-medium">Hello, <br/><span className="text-semibold text-3xl">Sumit 👋</span></h1>
            <button className="bg-red-600 text-lg text-white font-medium cursor-pointer rounded px-3 py-1">Log Out</button>
        </div>
    )
}
export default Header;