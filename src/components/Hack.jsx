import React from 'react'
import data from "../assets/data.png"
import fintech from "../assets/fintech.png"
import digital from "../assets/digital.png"
const Hack = () => {
  return (
    <div class="">
        <div class="h-[5rem] w-max max-w-[100vw] mb-12 mx-auto">
        <div class="font-titilium text-white text-4xl max-w-[100vw] font-extrabold mt-[3rem] py-4 text-center">THIS YEAR WE HACK FOR</div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
        </div>
        <div class="flex flex-row flex-wrap my-auto justify-around mx-4 sm:ml-[4rem] sm:mr-[5rem]">
                <div className="pt-10 text-center">
                    <div><img src={data} className="" alt="data" /></div>
                    <div class="text-white text-3xl  font-semibold gap-1 mt-4">Data innovation</div>
                    <div class="text-white  mt-4 max-w-xs">The financial sector is incredibly data intensive, and the challenge has been finding ways to harness the data to drive business growth. If you're a start-up focused on disrupting the way fintech uses data, register now for the IN48 data innovation ideation session.</div>
                </div>
                <div className="pt-10 text-center">
                    <div><img src={fintech} alt="data" /></div>
                    <div class="text-white text-3xl   font-semibold gap-1 mt-4">AI in fintech</div>
                    <div class="text-white mt-4 max-w-xs">Financial companies rely on artificial intelligence to improve everything from monitoring and reporting to regulatory compliance and beyond. Leveraging big data, cloud computing, AI and predictive analytics, companies can automate compliance tasks, reduce fraud risks, enhance authentication and improve identity management. If you're a start-up looking to deliver innovative solutions in this world, this is the ideation session for you.</div>
                </div>
                <div className="pt-10 text-center">
                    <div><img src={digital} alt="data" /></div>
                    <div class="text-white text-3xl   font-semibold gap-1 mt-4">Digital assets</div>
                    <div class="text-white  mt-4 max-w-xs">As we explore more digital environments with fewer limitations and boundaries, we are entering a new world of blockchain-powered cryptocurrencies, NFTs and more. These innovations are an increasingly vital aspect of the virtual economy at the heart of the metaverse. If you're a start-up dedicated to building a disruptive web3 solution, you don't want to miss this ideation session.</div>
                      
                </div>
        </div>
    </div>
  )
}

export default Hack