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
        <div className='flex items-center justify-between mt-[3.5rem]'>
            <div className='flex items-center gap-2 text-[#414141]'>
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
        <div className='grid grid-cols-2 gap-[2rem] mt-[3rem]'>
            <div className='bg-white p-1 rounded-[16px] w-[600px] mx-auto shadow-lg'>
                <div className='bg-[#FCFBFC] rounded-[16px]'>
                    <img src="./images/toptexture.svg" className='mx-auto' alt="" />
                    <div className='mt-[-70px]'>
                        <p className='font-[600] text-[24px] text-center'>Sarah Gregman Obinwanne</p>
                        <p className='text-[#333333] text-[14px] tracking-[-0.42px] text-center'>These are the details on their account profile.</p>
                    </div>
                    <div className='mt-[4rem] px-10'>
                        <div className='flex gap-[1rem]'>
                            <img src="./images/image-2.svg" className='self-start' alt="" />
                            <div className="">
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Name:</span>
                                    <span className="w-3/4">Sarah Gregman Obinwanne</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Age:</span>
                                    <span className="w-3/4">62 Years</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Bio:</span>
                                    <span className="w-3/4">
                                        Sarah Gregman is Nigerian politician, statesman, political activist and business executive. He served twice as the Governor of Anambra State from 2006 to 2010, and a second term until 2014.
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Party:</span>
                                    <span className="w-3/4">Sushi Party</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-6 mt-16'>
                            <button className='bg-primary-color mx-auto block text-white w-full py-2 rounded-[8px] mt-3'>Vote</button>
                            <button className='w-full mx-auto block text-primary-color font-[600] py-2 rounded-[8px] mt-3'>View Manifesto</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white p-1 rounded-[16px] w-[600px] mx-auto shadow-lg'>
                <div className='bg-[#FCFBFC] rounded-[16px]'>
                    <img src="./images/toptexture.svg" className='mx-auto' alt="" />
                    <div className='mt-[-70px]'>
                        <p className='font-[600] text-[24px] text-center'>Smith Rowe Jnr.</p>
                        <p className='text-[#333333] text-[14px] tracking-[-0.42px] text-center'>These are the details on their account profile.</p>
                    </div>
                    <div className='mt-[4rem] px-10'>
                        <div className='flex gap-[1rem]'>
                            <img src="./images/image-1.svg" className='self-start' alt="" />
                            <div className="">
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Name:</span>
                                    <span className="w-3/4">Smith Rowe Jnr.</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Age:</span>
                                    <span className="w-3/4">46 Years</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Bio:</span>
                                    <span className="w-3/4">
                                        Chief Smith Rowe is a Nigerian politician who is the 16th and current president of Nigeria. He was the governor of Lagos State from 1999 to 2007, and senator for Lagos West in the Third Republic.
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Party:</span>
                                    <span className="w-3/4">Blue Party</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-6 mt-16'>
                            <button className='bg-primary-color mx-auto block text-white w-full py-2 rounded-[8px] mt-3'>Vote</button>
                            <button className='w-full mx-auto block text-primary-color font-[600] py-2 rounded-[8px] mt-3'>View Manifesto</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white p-1 rounded-[16px] w-[600px] mx-auto shadow-lg'>
                <div className='bg-[#FCFBFC] rounded-[16px]'>
                    <img src="./images/toptexture.svg" className='mx-auto' alt="" />
                    <div className='mt-[-70px]'>
                        <p className='font-[600] text-[24px] text-center'>Smith Rowe Jnr.</p>
                        <p className='text-[#333333] text-[14px] tracking-[-0.42px] text-center'>These are the details on their account profile.</p>
                    </div>
                    <div className='mt-[4rem] px-10'>
                        <div className='flex gap-[1rem]'>
                            <img src="./images/image-1.svg" className='self-start' alt="" />
                            <div className="">
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Name:</span>
                                    <span className="w-3/4">Smith Rowe Jnr.</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Age:</span>
                                    <span className="w-3/4">46 Years</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Bio:</span>
                                    <span className="w-3/4">
                                        Chief Smith Rowe is a Nigerian politician who is the 16th and current president of Nigeria. He was the governor of Lagos State from 1999 to 2007, and senator for Lagos West in the Third Republic.
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Party:</span>
                                    <span className="w-3/4">Blue Party</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-6 mt-16'>
                            <button className='bg-primary-color mx-auto block text-white w-full py-2 rounded-[8px] mt-3'>Vote</button>
                            <button className='w-full mx-auto block text-primary-color font-[600] py-2 rounded-[8px] mt-3'>View Manifesto</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white p-1 rounded-[16px] w-[600px] mx-auto shadow-lg'>
                <div className='bg-[#FCFBFC] rounded-[16px]'>
                    <img src="./images/toptexture.svg" className='mx-auto' alt="" />
                    <div className='mt-[-70px]'>
                        <p className='font-[600] text-[24px] text-center'>Sarah Gregman Obinwanne</p>
                        <p className='text-[#333333] text-[14px] tracking-[-0.42px] text-center'>These are the details on their account profile.</p>
                    </div>
                    <div className='mt-[4rem] px-10'>
                        <div className='flex gap-[1rem]'>
                            <img src="./images/image-2.svg" className='self-start' alt="" />
                            <div className="">
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Name:</span>
                                    <span className="w-3/4">Sarah Gregman Obinwanne</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Age:</span>
                                    <span className="w-3/4">62 Years</span>
                                </div>
                                <div className="mb-2 flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Bio:</span>
                                    <span className="w-3/4">
                                        Sarah Gregman is Nigerian politician, statesman, political activist and business executive. He served twice as the Governor of Anambra State from 2006 to 2010, and a second term until 2014.
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-1/4 font-[500] text-[#9E9D9D]">Party:</span>
                                    <span className="w-3/4">Sushi Party</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-6 mt-16'>
                            <button className='bg-primary-color mx-auto block text-white w-full py-2 rounded-[8px] mt-3'>Vote</button>
                            <button className='w-full mx-auto block text-primary-color font-[600] py-2 rounded-[8px] mt-3'>View Manifesto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCandidates