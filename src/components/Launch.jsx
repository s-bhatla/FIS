import React from 'react'
import RegisterButton from './RegisterButton'
import { useState } from 'react'
const Launch = () => {
    const [hour,setHour] = useState(0);
    const [day,setDay] = useState(0);
    const [minute,setMinute] = useState(0);
    return (
        <div>
        <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
    <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">LAUNCH EVENT</div>
    <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
    </div>
        <div className="mt-8 mx-auto">
            <div className="sm:max-w-[50vw] mx-auto px-4 text-center mb-[2rem] text-white">Two days launch event is a prelude to InnovateIN48 Ideathon. The event will cover an introduction to the FIS innovation ecosystem. Learn about FIS products and APIs, participate in various hands-on workshops. This event is designed to help start-ups prepare for the Ideathon.</div>
            
        </div>
        <div class="flex flex-row flex-wrap my-auto justify-around mx-auto sm:ml-[4rem] sm:mr-[5rem]">
              <div className="pt-10 text-center sm:ml-[15rem]">
                  <div className="bg-[#4acc3e] h-[12rem] w-[14rem]">
                   <div className="text-[8rem] font-bold">{day}</div>
                 </div>
                  <div class="text-white text-2xl font-semibold gap-1 mt-4">DAYS</div>
                    
               </div>
               <div className="pt-10 text-center">
               <div className="bg-[#4acc3e] h-[12rem] w-[14rem]">
                       <div className="text-[8rem] font-bold">{hour}</div>
                   </div>
                   <div class="text-white text-2xl font-semibold gap-1 mt-4">HOURS</div>
                    
             </div>
               <div className="pt-10 text-center sm:mr-[15rem]">
              <div className="bg-[#4acc3e] h-[12rem] w-[14rem]">
                       <div className="text-[8rem] font-bold">{minute}</div>
                    </div>
                    <div class="text-white text-2xl font-semibold gap-1 mt-4">MINUTES</div>
                </div>
         </div>
         <div className='mx-auto mt-12 text-center'>
         <a href="#" class="text-md inline px-4 mx-1 py-1 leading-none border-[0.05px] rounded-full text-black bg-[#4BCD3E] font-bold hover:bg-black hover:text-[#4BCD3E] btn-trans">Register Now</a>
         </div>
    </div>
    )
}

export default Launch