import React from 'react'
import chess from '../assets/chess.png'
const Challenge = () => {
  return (
    <div class="overflow-x-hidden">
        <div class="h-[5rem] w-[22rem]">
        <div class="text-white text-3xl font-extrabold mt-[3rem] pl-[5rem] px-4 py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">THE CHALLENGE</div>
        </div>
        <div className="mt-[4rem]">
            <div className="max-w-[45rem] mb-[4rem] pl-[5rem] text-white text-sm">This is a 48-hour virtual event that is open to start-ups in APAC that are working on complementary or augmented solutions that align with the event's themes. Participants will study the FIS ecosystem using publicly available products and API documentation. Submissions will include a theme-specific pitch deck that outlines defined problem statements and how the proposed solution--offered either as a standalone option or via the FIS Code Connect API marketplace--can deliver innovation in fintech. Participants can also suggest new APIs that may help to enhance the solution further.</div>
            <img src={chess} class="pl-[5rem]" alt="chess"></img>
        </div>
    </div>
  )
}

export default Challenge