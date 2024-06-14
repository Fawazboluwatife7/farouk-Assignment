import React from 'react'

const BiometricCapture = () => {
  return (
    <div className='w-[1200px] mx-auto pb-[5rem]'>
        <p className='text-[24px] font-[600] mt-7'>Biometric Data Capture</p>
        <p className='text-[#464646] mt-2'>Please provide your biometric data for secure verification.</p>
        <div className='flex flex-col items-center justify-center text-center mt-[4rem]'>
            <div className='w-[363px] h-[363px] bg-[#D9D9D9] rounded-[12px]'></div>
            <p className='w-[30%] text-center my-6'>Follow the instructions to scan your fingerprint and take a facial photo.</p>
            <button className='bg-light-green w-[40%] mx-auto block text-white py-2 rounded-[8px] mt-3'>Capture Biometric Data</button>
        </div>
    </div>
  )
}

export default BiometricCapture