import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div className='mt-[5rem] flex items-center justify-between w-[1200px] mx-auto'>
        <div className='w-[55%]'>
          <p className='text-[13px] px-[13px] py-[10px] rounded-[10px] border inline'>Version 2.0 is here</p>
          <h1 className='text-primary-color my-[1rem] text-[50px] font-[500] leading-[64px] tracking-[-1.08px]'>
              Secure, Transparent, and Verifiable: Experience the Power of Blockchain Voting!
          </h1>
          <p className='text-[#3E3E3E] text-[20px]'>
              Experience unparalleled security, transparency, and trust in the electoral process. Say goodbye to concerns about fraud, manipulation, or coercion.
          </p>
          <div className='border inline-flex mt-4 rounded-[10px] items-center '>
            <input type="text" placeholder='name@gmail.com' className='pl-3 outline-none'/>
            <button className='bg-light-green text-white py-[10px] rounded-[10px] px-[13px]'>Join Waitlist</button>
          </div>
        </div>
        <img src="./images/Visual.svg" alt="" />
      </div>
      <div className='mt-10 w-[1200px] mx-auto'>
        <p className='tracking-[13.2px] text-[#565560] text-[15px]'>TRUSTED BY</p>
        <div className='mb-[10rem]'></div>
      </div>
      <div className='mt-[2rem] w-[1200px] mx-auto'>
        <p className='tracking-[13.2px] text-[#565560] text-[15px] mb-3'>ABOUT FUTUREVOTE</p>
        <div className='w-[65%]'>
          <p className='text-primary-color text-[30px] tracking-[-0.8px] leading-[40px] font-[500]'>Futurevote, is a blockchain-based platform, that aims to revolutionize elections by introducing a secure, transparent, and accessible voting system.</p>
          <p className='text-[#565560] mt-1'>Developed to eliminate fraud, enhance security, and ensure accurate vote counting, the company continuously improves its technology to meet user needs.</p>
        </div>
      </div>
      <div>
        <img src="./images/meso.svg" alt="" />
        <div className='flex items-center text-primary-color justify-between mt-[2rem] w-[1200px] mx-auto'>
          <div className='text-center'>
            <p className='font-[500] text-[45px]'>99%</p>
            <p className='font-[300] mt-[-10px]'>Reduction in Fraudulent Votes</p>
          </div>
          <div className='text-center'>
            <p className='font-[500] text-[45px]'>50%</p>
            <p className='font-[300] mt-[-10px]'>Faster Result Reporting</p>
          </div>
          <div className='text-center'>
            <p className='font-[500] text-[45px]'>80%</p>
            <p className='font-[300] mt-[-10px]'>Cost Savings</p>
          </div>
        </div>
      </div>
      <div className='mt-[10rem] w-[1200px] mx-auto'>
        <p className='tracking-[13.2px] text-[#565560] text-[15px] mb-3'>FEATURES</p>
        <div className='w-[65%]'>
          <p className='text-[#414141] mt-1 font-[500] text-[30px] tracking-[-0.8px] leading-[40px]'>Futurevote, is a blockchain-based platform, that aims to revolutionize elections by introducing a secure, transparent, and accessible voting system.</p>
        </div>
      </div>
      <div className='mt-[5rem] w-[1200px] mx-auto'>
        <div className='flex items-start justify-between'>
          <div className='w-[48%] h-[500px] bg-[#C4C4C4]'></div>
          <div className='w-[48%]'>
            <p className='text-[200px] text-[#3939391C]'>01</p>
            <p className='text-[22px] font-[500]'>Unmatched Security</p>
            <p>Our platform leverages advanced blockchain technology to ensure that every vote is securely encrypted and tamper-proof. With cutting-edge cryptographic protocols, your vote remains confidential and protected from unauthorized access.</p>
          </div>
        </div>
        <div className='flex items-start justify-between flex-row-reverse my-10'>
          <div className='w-[48%] h-[500px] bg-[#C4C4C4]'></div>
          <div className='w-[48%]'>
            <p className='text-[200px] text-[#3939391C]'>02</p>
            <p className='text-[22px] font-[500]'>Smart Conract</p>
            <p>Utilize the power of smart contracts to automate and enforce electoral rules and procedures. These self-executing contracts ensure that all voting processes are fair, efficient, and free from human error or manipulation.</p>
          </div>
        </div>
        <div className='flex items-start justify-between'>
          <div className='w-[48%] h-[500px] bg-[#C4C4C4]'></div>
          <div className='w-[48%]'>
            <p className='text-[200px] text-[#3939391C]'>03</p>
            <p className='text-[22px] font-[500]'>Voter Anonymity</p>
            <p>Preserving voter privacy is paramount. Our platform ensures that while every vote is recorded and verifiable, the identity of each voter remains anonymous, protecting individuals from coercion and ensuring free expression of choice.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home