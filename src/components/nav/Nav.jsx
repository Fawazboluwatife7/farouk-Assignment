import React from 'react'
import TopInfo from '../top-info/TopInfo'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <TopInfo />
      <div className='bg-[#FBFBFB]'>
        <nav className='flex items-center w-[1200px] mx-auto justify-between py-[16px]'>
          <Link to='/' className='font-bold text-[20px]'>Futurevote</Link>
          <ul className='flex items-center justify-between text-[#00000099] gap-[1rem] text-[14px]'>
            <li>
              <Link to='/'>Individual</Link>
            </li>
            <li>
              <Link to='/'>Political parties</Link>
            </li>
            <li>
              <Link to='/'>Elections</Link>
            </li>
            <li>
              <Link to='/'>News</Link>
            </li>
            <li>
              <Link to='/'>Resources</Link>
            </li>
          </ul>
          <button className='bg-black py-2 px-[1.2rem] text-white rounded-[7px] text-[14px]'>Connect Wallet</button>
        </nav>
      </div>
    </div>
  )
}

export default Nav