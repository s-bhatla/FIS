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
        <div class="flex flex-wrap mt-16 mb-12 justify-center margin-top-partners">
            <img src={aws} alt="aws" class="h-[5rem] w-[7rem] mb-8 ml-auto partner-img"></img>
            <img src={hedara} alt="hedera" class="h-[4rem] w-[13rem] mr-auto ml-[105px] partner-img"></img>
        </div>
    </div>
  )
}
 
export default Partners