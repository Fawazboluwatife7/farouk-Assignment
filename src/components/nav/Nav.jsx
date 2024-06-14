import React from 'react'
import TopInfo from '../top-info/TopInfo'
import { Link, useLocation } from 'react-router-dom'
import { IoIosMoon } from "react-icons/io";
import { CgSearch } from "react-icons/cg";


const Nav = () => {

  const location = useLocation()

  return (
    <div>
      <TopInfo />
      <div className='bg-[#FBFBFB]'>
        <nav className='flex items-center w-[1200px] mx-auto justify-between py-[16px]'>
          <Link to='/' className={location.pathname === "/" ? "font-bold text-[20px]":"text-light-green font-bold text-[20px]"}>Futurevote</Link>
          <ul className='flex items-center justify-between text-[#00000099] gap-[1rem] text-[14px]'>
            <li>
              <Link to='/kyc'>Individual</Link>
            </li>
            <li>
              <Link to='/view-candidates'>Political parties</Link>
            </li>
            <li>
              <Link to='/access-vote-portal'>Elections</Link>
            </li>
            <li>
              <Link to='/mint-vote'>News</Link>
            </li>
            <li>
              <Link to='/biometric-capture'>Resources</Link>
            </li>
          </ul>
          <div className='flex items-center gap-3'>
            <div className={location.pathname === "/" ? 'hidden':'flex gap-3'}>
              <CgSearch className='text-[25px] cursor-pointer'/>
              <IoIosMoon className='text-[25px] cursor-pointer'/>
            </div>
            <button className={location.pathname === "/" ? 'bg-black py-2 px-[1.2rem] text-white rounded-[7px] text-[14px]':'bg-light-green py-2 px-[1.2rem] text-white rounded-[7px] text-[14px]'}>Connect Wallet</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav