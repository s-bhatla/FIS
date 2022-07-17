import React from 'react'
import work from '../assets/work.png'
const Challenge = () => {
  return (
    <div>
        <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
    <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">THE CHALLENGE</div>
    <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
    </div>
        <div className="mt-8 mx-auto">
            <div className="sm:max-w-[50vw] mx-auto px-4 text-center mb-[2rem] text-white text-sm">This is a 48-hour virtual event that is open to start-ups in APAC that are working on complementary or augmented solutions that align with the event's themes. Participants will study the FIS ecosystem using publicly available products and API documentation. Submissions will include a theme-specific pitch deck that outlines defined problem statements and how the proposed solution--offered either as a standalone option or via the FIS Code Connect API marketplace--can deliver innovation in fintech. Participants can also suggest new APIs that may help to enhance the solution further.</div>
            <img src={work} class="mx-auto max-w-[90vw]" alt="chess"></img>
        </div>
    </div>
  )
}

export default Challenge