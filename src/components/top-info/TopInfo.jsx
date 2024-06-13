import React from 'react'
import { GoArrowRight } from "react-icons/go";


const TopInfo = () => {
  return (
    <div className='flex items-center justify-center bg-black py-[10px] text-white text-[14px]'>
        <p className='text-[#FFFFFF99]'>Next Election: Edo Governorship Elections-21st September 2024</p>
        <div className='flex items-center ml-5'>
            <p>See details</p>
            <GoArrowRight />
        </div>
    </div>
  )
}

export default TopInfo