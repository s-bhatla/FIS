import React from 'react'
import work from '../assets/work.png'
const Work = () => {
  return (
    <div class="">
    <div class="h-[5rem] w-[30rem] max-w-[100vw]">
    <div class="text-white text-3xl font-extrabold mt-[3rem] pl-[4rem] py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">HOW DOES THIS WORK?</div>
    </div>
    <div class="flex flex-row flex-wrap mt-[4rem] justify-between ml-[4rem] mr-[5rem]">
        <div className="">
            <div className="text-white text-md max-w-lg mt-[2rem]">
            To celebrate our culture of co-creation, innovation and collaboration, we invite you to be a part of the virtual FIS INNOVATEIN48 Ideathon. This event encourages experiential learning and harnesses the possibilities of emerging technology.
            </div>
            <div className="text-white text-md max-w-lg mt-[2rem]">
            If you're an APAC-based start-up whose solutions align with the event's themes (Data innovation, AI in fintech, and Digital assets and blockchain) this event is the place to be. Bring your passion for ideation, prototyping and fintech solutions to the table. Your pitch deck should explain how your IP can work within the FIS ecosystem to solve current industry challenges.
            </div>
        </div>
            <div>
                <div><img src={work} alt="participate" /></div>
            </div>
    </div>
    <div class="flex flex-row flex-wrap mt-[4rem] justify-between ml-[4rem]">
                <div>
                    <div class="text-white text-2xl font-semibold gap-1 mt-4 text-[#4BCD3E]">IDEATE</div>
                    <div class="text-white text-sm max-w-xs mt-4">Solve a challenge from the futuristic fintech services industry.</div>
                </div>
                <div>
                    <div class="text-white text-2xl font-semibold gap-1 mt-4  text-[#4BCD3E]">IDENTIFY</div>
                    <div class="text-white text-sm max-w-xs mt-4">Identify the relevant problem statements on the basis of this year’s themes, and get acquainted with the FIS ecosystem, its products and API documentation.</div>
                </div>
                <div>
                    <div class="text-white text-2xl font-semibold gap-1 mt-4  text-[#4BCD3E]">SUBMIT</div>
                    <div class="text-white text-sm max-w-xs mt-4">Submissions will include a pitch deck, describing a specific hand-picked problem statement and how the IP partner’s offerings (standalone or via the FIS Code Connect API marketplace) can bring innovative solutions to the table. You could also suggest new FIS APIs that may contribute to enhancing the solution further.</div>
                      
                </div>
    </div>
    <div class="flex flex-row flex-wrap mt-[2rem] justify-between ml-[4rem] mr-[5rem] ">
            <div className="">
                <div className="text-[#4BCD3E] text-2xl max-w-lg mt-[4rem] font-semibold">
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