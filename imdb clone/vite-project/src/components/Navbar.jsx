import React from 'react'
import Logo from '../Movieslogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt="Logo"/>

        <Link to='/' className='text-blue-600 text-3xl font-bold'>Movies</Link>

        <Link to='/watchlist' className='text-blue-600 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
