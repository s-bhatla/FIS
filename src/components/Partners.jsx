import React from 'react'
import aws from '../assets/aws.png'
import hedara from '../assets/hedera.png'
const Partners = () => {
  return (
    <div class="">
        <div class="h-[5rem] w-max max-w-[100vw]">
        <div class="font-titilium text-white sm:pl-[4rem] sm:pr-[1rem] px-[1rem] text-4xl font-extrabold mt-[3rem] py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">SPECIAL THANKS TO OUR PARTNERS</div>
        </div>
        <div class="flex flex-wrap mt-16 mb-12 sm:ml-16">
            <img src={aws} alt="aws" class="h-[5rem] w-[7rem] sm:mr-[4rem] mb-8 mx-auto"></img>
            <img src={hedara} alt="hedera" class="h-[4rem] w-[13rem] mx-auto"></img>
        </div>
    </div>
  )
}
 
export default Partners