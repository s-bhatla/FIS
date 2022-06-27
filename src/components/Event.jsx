import React from 'react'
import event from '../assets/event.png'
const Event = () => {
  return (
    <div class="">
    <div class="h-[5rem] w-max max-w-[100vw]">
    <div class="text-white sm:pl-[4rem] sm:pr-[1rem] px-[1rem] text-3xl font-extrabold mt-[3rem] py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">ABOUT THIS INNOVATEIN48 EVENT</div>
    </div>
    <div class="flex flex-row  flex-wrap justify-between ml-[4rem]">
            <div className=" max-w-[40vw]">
                <div className="text-white text-md mt-[2rem]">
                Join us for this 48-hour Ideathon and create a pitch deck to show how your innovative solutions can meet the needs of current industry challenges. Propose a standalone solution, or leverage an integration with current FIS APIs and products.
                </div>
                <div className="flex flex-wrap justify-evenly content-center">
                    <div className='min-w-[16rem]'>
                    <div class="text-2xl font-semibold gap-1 mt-4 text-[#4BCD3E]">KICK OFF</div>
                    <div class="text-white text-sm mt-4">June 30,2022</div>
                    <div class="text-white text-sm mt-1">4:00 p.m.</div>
                    </div>
                    <div className='min-w-[16rem]'>
                    <div class="text-2xl font-semibold gap-1 mt-4 text-[#4BCD3E]">IDEATHON</div>
                    <div class="text-white text-sm mt-4">AUG 13,2022</div>
                    <div class="text-white text-sm mt-1">AUG 14,2022</div>
                    <div class="text-white text-sm mt-1">8:00 a.m. to 8:00 p.m.</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-evenly content-center mt-4"> 
                    
                    <div className='min-w-[16rem]'>
                    <div class="text-2xl font-semibold gap-1 mt-4 text-[#4BCD3E]">DEMO DAY</div>
                    <div class="text-white text-sm mt-4">AUG 17,2022</div>
                    <div class="text-white text-sm mt-1">AUG 19,2022</div>
                    <div class="text-white text-sm mt-1">8:00 a.m. to 8:00 p.m.</div>
                    </div>
                    <div className='min-w-[16rem]'>
                    <div class="text-2xl font-semibold gap-1 mt-4 text-[#4BCD3E]">CLOSING CEREMONY</div>
                    <div class="text-white text-sm mt-4">AUG 20,2022</div>
                    </div>
                </div>
                <div className="mt-8">
                <a href="#" class="inline-block text-md px-4 py-3 leading-none border-[0.2px] rounded-full mr-[6rem] text-white bg-[#4BCD3E] font-bold  hover:text-black">Register now</a>
                </div>
            </div>
                <div>
                    <div><img className='pr-[2rem]' src={event} alt="participate" /></div>
                </div>
        </div>
</div>
  )
}

export default Event