import React, { useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import LoginImg from "../assets/login.svg"
import { Link, useNavigate } from "react-router-dom"

function LogIn() {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await account.createEmailSession(user.email, user.password)
            navigate("/home")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative">

            <div className="z-10 mt-16 bg-tertiary md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-secondary lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-gray-800">
                <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img width="600px" height="400px" src={LoginImg} alt="img" />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                        <h2 className="mb-4 text-6xl self-center font-bold tracking-wider text-white">
                            FRENZY
                        </h2>

                        <div className="relative mt-4 outline-transparent outline">
                            <input type="email" name="email" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                            <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">Email</label>
                        </div>

                        <div className="relative mt-8 outline-transparent outline">
                            <input type="password" name="password" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                            <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">Password</label>
                        </div>

                        <div className="w-full block bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg font-semibold rounded-lg px-4 py-3 border border-gray-300 cursor-pointer shadow-lg my-8" onClick={loginUser}>
                            <Link to="/home"><div className="flex items-center justify-center text-white">
                                Sign in
                            </div></Link>
                        </div>

                        <div className='text-white text-md text-right'>
                            Don't have an account? <Link to="/signup" className='text-underline'>Sign Up</Link>
                        </div>

                        {/* <div className="grid justify-center grid-cols-1 gap-4 mx-4 md:grid-cols-2">

                            <button type="button" className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg w-52" onClick={loginUser}>Sign In</button>

                            <Link to="/signup"><button type="button" className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg w-52">Sign Up</button></Link>
                        </div> */}

                    </div>
                </div>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-tertiary rounded-3xl md:block hidden"></div>

        </div>
    )
}

export default LogIn
