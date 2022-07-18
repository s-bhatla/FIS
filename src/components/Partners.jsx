import React from 'react'
import aws from '../assets/aws.png'
import hedara from '../assets/hedera.png'
const Partners = () => {
  return (
    <div id="partners">
        <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
        <div class="font-titilium text-white px-[1rem] text-4xl font-extrabold mt-[3rem] text-center">SPECIAL THANKS TO OUR PARTNERS</div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-4"></div>
        </div>
        <div class="flex flex-wrap mt-16 mb-12 sm:ml-16 margin-top-partners">
            <img src={aws} alt="aws" class="h-[5rem] w-[7rem] sm:mr-[4rem] mb-8 mx-auto"></img>
            <img src={hedara} alt="hedera" class="h-[4rem] w-[13rem] mx-auto"></img>
        </div>
    </div>
  )
}
 
export default Partners