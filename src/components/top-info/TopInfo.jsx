import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { useLocation } from 'react-router-dom';


const TopInfo = () => {

  const location = useLocation()

  return (
    <div className={location.pathname === "/" ? `flex items-center justify-center bg-black py-[10px] text-white text-[14px]` : `flex items-center justify-center bg-primary-color py-[10px] text-white text-[14px]`}>
        <p className='text-[#FFFFFF99]'>Next Election: Edo Governorship Elections-21st September 2024</p>
        <div className='flex items-center ml-5'>
            <p>See details</p>
            <GoArrowRight />
        </div>
    </div>
  )
}

export default TopInfo