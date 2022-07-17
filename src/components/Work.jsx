import React from 'react'
import work from '../assets/work.png'
const Work = () => {
  return (
    <div class="">
    <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
    <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">HOW DOES THIS WORK?</div>
    <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
    </div>
    <div class="flex flex-row flex-wrap mt-8 justify-between mx-4 sm:ml-[4rem] sm:mr-[5rem]">
        <div class="my-auto">
            <div className="text-white text-md sm:max-w-[30vw] mt-[2rem]">
            To celebrate our culture of co-creation, innovation and collaboration, we invite you to be a part of the virtual FIS INNOVATEIN48 Ideathon. This event encourages experiential learning and harnesses the possibilities of emerging technology.
            </div>
            <div className="text-white text-md sm:max-w-[30vw] mt-[2rem]">
            If you're an APAC-based start-up whose solutions align with the event's themes (Data innovation, AI in fintech, and Digital assets and blockchain) this event is the place to be. Bring your passion for ideation, prototyping and fintech solutions to the table. Your pitch deck should explain how your IP can work within the FIS ecosystem to solve current industry challenges.
            </div>
        </div>
            <div>
                <div><img src={work} className="mt-10 sm:h-[25rem] sm:mb-0" alt="participate" /></div>
            </div>
    </div>
    <div class="flex flex-row flex-wrap mt-[4rem] justify-between mx-4 sm:ml-[4rem]">
                <div>
                    <div class="text-2xl font-semibold gap-1 mt-4 text-[#4BCD3E]">IDEATE</div>
                    <div class="text-white text-sm max-w-xs mt-4">Solve a challenge from the futuristic fintech services industry.</div>
                </div>
                <div>
                    <div class="text-2xl font-semibold gap-1 mt-4  text-[#4BCD3E]">IDENTIFY</div>
                    <div class="text-white text-sm max-w-xs mt-4">Identify the relevant problem statements on the basis of this year’s themes, and get acquainted with the FIS ecosystem, its products and API documentation.</div>
                </div>
                <div className='mr-16'>
                    <div class="text-2xl font-semibold gap-1 mt-4  text-[#4BCD3E]">SUBMIT</div>
                    <div class="text-white text-sm max-w-[20rem] mt-4">Submissions will include a pitch deck, describing a specific hand-picked problem statement and how the IP partner’s offerings (standalone or via the FIS Code Connect API marketplace) can bring innovative solutions to the table. You could also suggest new FIS APIs that may contribute to enhancing the solution further.</div>
                      
                </div>
    </div>
    <div class="flex flex-row flex-wrap sm:mt-[2rem] justify-between mx-4 sm:ml-[4rem] sm:mr-[5rem] ">
            <div className="">
                <div className="text-[#4BCD3E] text-2xl max-w-lg mt-10 font-semibold">
                SUBMISSION CHECKLIST:
                </div>
                <div className="text-white text-lg max-w-lg mt-[1rem]">
                 • 2 minute video (optional).
                </div>
                <div className="text-white text-lg max-w-lg mt-[1rem]">
                 • Theme-specific pitch deck with the idea
                </div>
                <div className="text-white text-lg max-w-lg mt-[1rem]">
                 • FIS API's used/requested (if any) 
                </div>
            </div>
        </div>
</div>
  )
}

export default Work