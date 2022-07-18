import React from 'react'
import work from '../assets/work.png'
const Challenge = () => {
  return (
    <div id="challenge">
        <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
    <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">THE CHALLENGE</div>
    <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
    </div>
        <div className="mt-8 mx-auto">
            <div className="sm:max-w-[80vw] mx-auto px-4 text-[16px] text-center mb-[2rem] text-white">This is a 48-hour virtual event that is open to start-ups in APAC that are working on complementary or augmented solutions that align with the event's themes. Participants will study the FIS ecosystem using publicly available products and API documentation. Submissions will include a theme-specific pitch deck that defined problem statement and how the proposed solution is offered. The solution could be either a standalone or integrate with FIS APIs. Participants can also suggest new APIs that may help to enhance the solution further.</div>
            <img src={work} class="mx-auto max-w-[90vw]" alt="chess"></img>
        </div>
    </div>
  )
}

export default Challenge