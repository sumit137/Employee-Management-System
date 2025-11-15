import React from 'react';
import Header from '../other/Header.jsx';

const AdminDashboard = () =>{
    return (
        <div className='h-full bg-[#1C1C1C] h-screen text-white'>
            <Header/>
            <div className=' flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl p-5'>
                <form className='flex flex-col gap-2 w-[50%]'>
                    <h2 className="flex items-center justify-center text-2xl font-semibold">Create Task</h2>
                    <h3>Task Title</h3>
                    <input className = "border-gray-500 border-1 rounded outline-none placeholder:pl-2" type='text' placeholder='Make a UI design'></input>
                    <h3>Description</h3>
                    <textarea className="border-1 border-gray-500 rounded outline-none placeholder:pl-2 min-h-30" placeholder='Make a modern UI design for task management app'></textarea>
                    <h3>Date</h3>
                    <input className="border-1 border-gray-500 rounded outline-none placeholder:pl-2 " type='date'></input>
                    <h3>Assign To</h3>
                    <input className="border-gray-500 border-1 rounded outline-none placeholder:pl-2" type='text' placeholder='Employee Name'></input>
                    <h3>Category</h3>
                    <input className="border-1 border-gray-500 rounded outline:none placeholder:pl-2" type='text' placeholder='Design Development, etc.'></input>
                    <button type='submit' className='mt-5 bg-black text-lg text-white font-medium cursor-pointer rounded px-3 py-1'>Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard;