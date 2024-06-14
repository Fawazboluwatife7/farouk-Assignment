import React from 'react'

const AccessVotingPortal = () => {
  return (
    <div className='w-[1200px] mx-auto pb-[5rem]'>
        {/* <p className='text-[24px] font-[600] mt-7 '>Access the Voting Portal</p> */}
        <div className='bg-white p-1 rounded-[16px] w-[600px] mx-auto shadow-lg mt-[60px]'>
            <div className='bg-[#FCFBFC] rounded-[16px]'>
                <img src="./images/toptexture.svg" className='mx-auto' alt="" />
                <div className='mt-[-70px]'>
                <p className='font-[600] text-[24px] text-center text-primary-color'>Access the Voting Portal</p>
                <p className='text-[#333] text-center text-[14px]'> Log in using your DID and digital wallet.</p>
                </div>
                <div className='w-[80%] mx-auto mt-[4rem] grid gap-[1.5rem]'>
                    <div className='w-full mb-[22rem]'>
                        <label htmlFor="fullname" className='block text-[#344054] mb-[6px] text-[14px]'>DID</label>
                        <input placeholder='Princewill Amadi' type="text" className='border border-[#D0D5DD] rounded-[8px] w-full py-[6px] px-2' />
                    </div>
                    
                    <div className='mb-6'>
                        <button className='border border-light-green bg-[#F3FFE3] w-full mx-auto block text-light-green font-[600] py-2 rounded-[8px] mt-3'>Connect Wallet</button>
                        <button className='bg-light-green mx-auto block text-white w-full py-2 rounded-[8px] mt-3'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccessVotingPortal