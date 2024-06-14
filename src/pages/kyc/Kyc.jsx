import React from 'react'

const Kyc = () => {
  return (
    <div className='w-[1200px] mx-auto pb-[5rem]'>
      <p className='text-[24px] font-[600] mt-7'>Please Fill in KYC Details</p>
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

export default Kyc