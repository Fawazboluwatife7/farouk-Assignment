import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import { GoFilter } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";



const ViewCandidates = () => {
  return (
    <div className='w-[1200px] mx-auto pb-[5rem]'>
        <p className='text-[24px] font-[600] mt-7'>Welcome Adeyemi,</p>
        <p className='text-[#464646] mt-2'>Explore candidate profiles, manifestos, and election information.</p>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-[#414141] mt-[3rem]'>
                <TbSmartHome className='text-[1.2rem]'/>
                <RxChevronRight />
                <p>Election</p>
                <RxChevronRight />
                <p className='text-primary-color bg-[#F3FFE3] py-1 px-2 rounded'>Presidential Election</p>
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <p className='text-[#767575]'>Filter By:</p>
                    <div className='cursor-pointer flex items-center gap-1 py-1 px-2 rounded-full border'>
                        <p>Party</p>
                        <RxChevronDown />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-[#767575]'>Sort By:</p>
                    <div className='text-primary-color bg-[#F3FFE3] py-1 px-2 rounded flex items-center gap-2'>
                        <GoFilter />
                        <p>Party</p>
                        <AiOutlineClose />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white p-1 rounded-[16px] w-[600px] mx-auto shadow-lg'>
            <div className='bg-[#FCFBFC] rounded-[16px]'>
                <img src="./images/toptexture.svg" className='mx-auto' alt="" />
                <div className='mt-[-70px]'>
                <p className='font-[600] text-[24px] text-center'>Please Fill in KYC Details</p>
                <p className='text-[#333] text-center'>These details would help us set up your account profile</p>
                </div>
                <div className='w-[80%] mx-auto mt-[4rem] grid gap-[1.5rem]'>
                <div className='w-full'>
                    <label htmlFor="fullname" className='block text-[#344054] mb-[6px] text-[14px]'>Full Name</label>
                    <input type="text" className='border border-[#D0D5DD] rounded-[8px] w-full py-[6px] px-2' />
                </div>
                <div className='w-full'>
                    <label htmlFor="fullname" className='block text-[#344054] mb-[6px] text-[14px]'>Date of Birth</label>
                    <input type="date" className='border border-[#D0D5DD] rounded-[8px] w-full py-[6px] px-2' />
                </div>
                <div className='w-full'>
                    <label htmlFor="fullname" className='block text-[#344054] mb-[6px] text-[14px]'>National Identity Number</label>
                    <input type="text" className='border border-[#D0D5DD] rounded-[8px] w-full py-[6px] px-2' />
                </div>
                <div className='w-full'>
                    <label htmlFor="fullname" className='block text-[#344054] mb-[6px] text-[14px]'>Phone Number</label>
                    <input type="text" className='border border-[#D0D5DD] rounded-[8px] w-full py-[6px] px-2' />
                </div>
                <div className='w-full'>
                    <label htmlFor="fullname" className='block text-[#344054] mb-[6px] text-[14px]'>Address</label>
                    <input type="text" className='border border-[#D0D5DD] rounded-[8px] w-full py-[6px] px-2' />
                </div>
                <button className='bg-light-green w-[80%] mx-auto block text-white py-2 rounded-[8px] mt-3'>Submit Kyc</button>
                <div className='text-[14px]'>
                    <p className='text-center text-[#ACB0B5] font-[600] mb-3 cursor-pointer'>Skip</p>
                    <p className='text-center text-[#747272] mb-5'>Didn’t receive code? <span className='text-light-green cursor-pointer'>Resend</span> </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCandidates