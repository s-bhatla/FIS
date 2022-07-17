import React from 'react'
import prize from '../assets/prize.png'
const Prize = () => {
  return (
    <div>
        <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
        <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center ">WHAT'S IN IT FOR YOU?</div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
        </div>
        <div class="flex flex-row flex-wrap justify-between mx-auto ml-4 sm:ml-[4rem]">
            <div className="my-auto">
                <div className="text-white text-xl  mt-[3rem] font-semibold">
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
                <div className="mr-12 mt-4">
                    <div><img src={prize} alt="participate" /></div>
                </div>
        </div>
    </div>
  )
}

export default Prize