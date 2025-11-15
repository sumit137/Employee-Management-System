import React from "react";

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("Form submitted :" + e.target[1].value);
        console.log("Email :" + email);
        console.log("Password :" + password);

        setEmail('');
        setPassword('');
    }
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-800">
            <div className="border-2 rounded-xl bg-gray-400 p-[2%] flex flex-col">
                <form onSubmit={(e) => {
                    submitHandler(e);
                }} className="flex flex-col justify-center items-center gap-4">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required className="text-xl bg-transparent  outline-none w-full border-1 py-3 px-5 border-gray-500 rounded-full placeholder:text-black-600" type="email" placeholder="Enter your email..."></input>
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required className="text-xl bg-transparent  outline-none w-full border-1 py-3 px-5 border-gray-500 rounded-full placeholder:text-black-600" type="password" placeholder="Enter your password..."></input>
                    <button className="bg-gray-800 text-white text-xl rounded-full w-full pt-[2%] pb-[2%] cursor-pointer">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;