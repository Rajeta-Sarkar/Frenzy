import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
