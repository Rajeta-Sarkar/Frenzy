import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom'

export default function SharkSpot() {
    return (
        <div>
            <Navbar />
            <div className='text-white'>

                <div className="grid place-items-center my-8">
                    <h1 className="py-5 text-5xl font-bold text-white">Shark Spotted</h1>
                    <iframe src="http://localhost:3000/map.html" height="500" width="800" />
                </div>
            </div>
        </div>
    )
}
