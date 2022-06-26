import React from 'react'
import aws from '../assets/aws.png'
import hedara from '../assets/hedera.png'
const Partners = () => {
  return (
    <div class="overflow-y-hidden">
        <div class="h-[5rem] w-[45rem]">
        <div class="text-white text-3xl font-extrabold mt-[3rem] pl-[5rem] px-4 py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">SPECIAL THANKS TO OUR PARTNERS</div>
        </div>
        <div class="flex flex-wrap mt-[3rem] ml-[7rem]">
            <img src={aws} alt="aws" class="h-[5rem] w-[7rem] mr-[4rem]"></img>
            <img src={hedara} alt="hedera" class="h-[4rem] w-[13rem]"></img>
        </div>
    </div>
  )
}
 
export default Partners