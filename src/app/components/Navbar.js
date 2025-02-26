import React from 'react'

export default function Navbar() {
  return (
    <div className='flex space-x-6 pt-6 '>
        <div> 
            <h1>Logo</h1>
        </div>
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
