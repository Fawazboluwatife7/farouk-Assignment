import React from 'react'

const MintVote = () => {
  return (
    <div className='w-[1200px] mx-auto pb-[5rem]'>
        <p className='text-[24px] font-[600] mt-7'>Minting Your Voting Token</p>
        <p className='text-[#464646] mt-2'>We are minting an NFT from your DID, which will serve as your token for on-chain voting rights.</p>
        <div className='flex flex-col items-center justify-center text-center mt-[4rem]'>
            <div className='w-[363px] h-[363px] bg-[#AAEA82] rounded-full'></div>
            <div className='w-[30%] text-center my-6'>
                <p className='mb-1'>Your voting token is Ready!</p>
                <p>0x0gugug;weuifg;urgfg</p>
            </div>
            <button className='bg-light-green w-[40%] mx-auto block text-white py-2 rounded-[8px] mt-3'>Proceed</button>
        </div>
    </div>
  )
}

export default MintVote