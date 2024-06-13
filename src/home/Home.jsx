import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


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
        <img src="./images/meso.svg" className='mx-auto w-full' alt="" />
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
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="179" height="241" viewBox="0 0 179 241" fill="none">
                <path d="M89.4975 241.003C26.1463 241.003 0.336548 186.366 0.336548 120.669C0.336548 54.9714 26.1463 0 89.4975 0C152.849 0 178.658 54.9714 178.658 120.669C178.658 186.366 152.849 241.003 89.4975 241.003ZM89.4975 214.187C133.743 214.187 148.491 169.942 148.491 120.669C148.491 71.3958 133.743 26.8153 89.4975 26.8153C45.2522 26.8153 30.5038 71.3958 30.5038 120.669C30.5038 169.942 45.2522 214.187 89.4975 214.187Z" fill="#393939" fill-opacity="0.11"/>
              </svg>
              <img src="./images/1.svg" alt="" />
            </div>
            {/* <p className='text-[200px] text-[#3939391C]'>01</p> */}
            <p className='text-[22px] font-[500] mb-[1.2rem] mt-[1rem]'>Unmatched Security</p>
            <p>Our platform leverages advanced blockchain technology to ensure that every vote is securely encrypted and tamper-proof. With cutting-edge cryptographic protocols, your vote remains confidential and protected from unauthorized access.</p>
          </div>
        </div>
        <div className='flex items-start justify-between flex-row-reverse my-20'>
          <div className='w-[48%] h-[500px] bg-[#C4C4C4]'></div>
          <div className='w-[48%]'>
            <div className='flex items-center mt-[60px]'>
               <svg xmlns="http://www.w3.org/2000/svg" width="147" height="191" viewBox="0 0 147 191" fill="none">
                <path d="M73.4898 190.598C21.9412 190.598 0 147.244 0 95.431C0 43.618 21.9412 0 73.4898 0C125.038 0 146.98 43.618 146.98 95.431C146.98 147.244 125.038 190.598 73.4898 190.598ZM73.4898 164.427C105.741 164.427 116.315 133.498 116.315 95.431C116.315 57.3643 105.741 26.1708 73.4898 26.1708C41.2389 26.1708 30.4004 57.3643 30.4004 95.431C30.4004 133.498 41.2389 164.427 73.4898 164.427Z" fill="#DDDEDF"/>
              </svg>
              <img src="./images/2.svg" alt="" />
            </div>
            <p className='text-[22px] font-[500] mt-[1rem] mb-[1.2rem]'>Smart Conract</p>
            <p>Utilize the power of smart contracts to automate and enforce electoral rules and procedures. These self-executing contracts ensure that all voting processes are fair, efficient, and free from human error or manipulation.</p>
          </div>
        </div>
        <div className='flex items-start justify-between'>
          <div className='w-[48%] h-[500px] bg-[#C4C4C4]'></div>
          <div className='w-[48%] mt-[60px]'>
            <div className='flex items-center'>
              <img src="./images/0.svg" alt="" />
              <img src="./images/3.svg" alt="" />
            </div>
            <p className='text-[22px] font-[500] mb-[1.2rem] mt-[1rem]'>Voter Anonymity</p>
            <p>Preserving voter privacy is paramount. Our platform ensures that while every vote is recorded and verifiable, the identity of each voter remains anonymous, protecting individuals from coercion and ensuring free expression of choice.</p>
          </div>
        </div>
      </div>
      <footer className='bg-[#464646] py-[5rem] mt-[14rem]'>
        <div>
          <ul className='flex items-center justify-center text-white gap-[2rem] text-[14px]'>
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
          <ul className='flex items-center justify-center text-white gap-[1rem] text-[16px] mt-[2rem]'>
            <li>
              <Link to='#'><FaXTwitter /></Link>
            </li>
            <li>
              <Link to='#'><AiFillInstagram /></Link>
            </li>
            <li>
              <Link to='#'><FaLinkedin /></Link>
            </li>
            <li>
              <Link to='#'><FaYoutube /></Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Home