import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import SharkSpecies from '../pages/SharkSpecies';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shark_species' element={<SharkSpecies />} />
            </Routes>
        </BrowserRouter>
    )
}
