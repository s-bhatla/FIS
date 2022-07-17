import React from 'react'
import participate from '../assets/participate.png'
const Participate = () => {
  return (
    <div class="">
        <div class="h-[5rem] w-max max-w-[100vw] mb-8 mx-auto">
        <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">WHO CAN PARTICIPATE?</div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
        </div>
        <div class="flex flex-row flex-wrap max-w-[100vw] justify-between mx-auto ml-4 sm:ml-[4rem]">
            <div className="sm:max-w-[40vw] mb-12">
                <div className="text-white text-md  mt-[2rem]">
                Startups with a technology stack that can solve horizontal problems - Customer onboarding, churn detection, customer loyalty, data marketplaces, DeFi stacks.
                </div>
                <div className="text-white text-md  mt-[2rem]">
                FinTech Startups with innovative business models that can augment FIS offering and want broader reach. 
                </div>
                <div className="text-white text-md  mt-[2rem]">
                Startups aspiring to build products and platforms leveraging FIS API’s.
                </div>
                <div className="text-white text-md  mt-[2rem]">
                Group of startups collaborating and providing new capabilities. Example : Satellite imaging, Drone startups and radar startup collaborate and provide alternate data for commodities markets. 
                </div>
                <div className="text-white text-md  mt-[2rem]">
                Startups having innovating automation and integration platforms. 
                </div>
            </div>
                    <div className="mr-12"><img src={participate} alt="participate" /></div>
        </div>
    </div>
  )
}

export default Participate