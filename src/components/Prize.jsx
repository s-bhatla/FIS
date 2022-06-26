import React from 'react'
import prize from '../assets/prize.png'
const Prize = () => {
  return (
    <div class="overflow-y-hidden">
        <div class="h-[5rem] w-[30rem]">
        <div class="text-white text-3xl font-extrabold mt-[3rem] pl-[5rem] px-4 py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">WHAT'S IN IT FOR YOU?</div>
        </div>
        <div class="flex flex-row flex-wrap mt-[4rem] justify-between ml-[5rem] mr-[5rem]">
            <div className="">
                <div className="text-white text-xl max-w-lg mt-[4rem] font-semibold">
                The winning team will:
                </div>
                <div className="text-white text-md max-w-lg mt-[1rem]">
                 • Having the oppurtunity to work with FIS to build POC 
                </div>
                <div className="text-white text-md max-w-lg mt-[1rem]">
                 • Get a fast-track application for the FIS Accelerator program
                </div>
                <div className="text-white text-md max-w-lg mt-[1rem]">
                 • Receive visiblity wtih the FIS Alliance and FIS Ventures programs 
                </div>
                <div className="text-white text-md max-w-lg mt-[1rem]">
                 • Win cloud credits worth US$50K - US$150K 
                </div>
            </div>
                <div>
                    <div><img src={prize} alt="participate" /></div>
                </div>
        </div>
    </div>
  )
}

export default Prize