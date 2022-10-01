import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup';
import Login from '../pages/Login';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/profile' element={<Profile />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
