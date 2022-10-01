import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='md:mx-28 mx-4 text-white py-12'>

                <div className='md:grid md:grid-cols-2 items-center'>
                    <div className=''>
                        <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                        <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>The inspiration of this project came from the diversity in the shark species which most people are curious about but at the same time unaware. This is solved very creatively by adding a automatic detection of the shark species by just using the picture.</p>

                        <Link to="/shark_spot">
                            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Shark Spot Map</button>
                        </Link>

                    </div>
                    <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                        <img src={HeroImg} alt="img" width="350" height="350" />
                    </div>
                </div>

                <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                    <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                        <img src={FeatImg} alt="img" width="350" height="350" />
                    </div>
                    <div className=''>
                        <h1 className='text-3xl md:text-5xl'>What else do we have</h1>
                        <p className='text-xl md:text-2xl py-4 tracking-wider'> APP NAME is a web app where you can:
                        </p>
                        <ul className="text-xl">
                            <li className="list-disc">Mark the places where you saw any presence of a shark.</li>
                            <li className="list-disc">This marker will help other visitors or surfers to prevent going there.</li>
                            <li className="list-disc">A notification will be received by Animal Rescue about the place where the shark was spotted.</li>
                            <li className="list-disc">Find out different species of sharks and their characteristics.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
