import React from 'react'
import prize from '../assets/prize.png'
const Prize = () => {
  return (
    <div class="">
        <div class="h-[5rem] w-max max-w-[100vw]">
        <div class="text-white text-3xl font-extrabold mt-[3rem] py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">WHAT'S IN IT FOR YOU?</div>
        </div>
        <div class="flex flex-row flex-wrap mt-[4rem] justify-between ml-[4rem]">
            <div className="">
                <div className="text-white text-xl  mt-[4rem] font-semibold">
                The winning team will:
                </div>
                <div className="text-white text-md  mt-[1rem]">
                 • Having the oppurtunity to work with FIS to build POC 
                </div>
                <div className="text-white text-md  mt-[1rem]">
                 • Get a fast-track application for the FIS Accelerator program
                </div>
                <div className="text-white text-md  mt-[1rem]">
                 • Receive visiblity wtih the FIS Alliance and FIS Ventures programs 
                </div>
                <div className="text-white text-md  mt-[1rem]">
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