import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className='main-nav'>
                <div className='MyLogo'>
                    <h2>
                        <span>F</span>oody
                        <span>P</span>oint
                    </h2>
                </div>
            <div className='nav-div1'>
           <Link className='link' to="/">Home</Link>
           <Link className='link' to="/Popular">Popular</Link>
            <Link  className='link'to="/about">About</Link>
             <Link  className='link'to="/contact">Contact</Link>
             </div>


            </nav>
        </>
    )
}
