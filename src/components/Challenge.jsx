import React from 'react'
import chess from '../assets/chess.png'
const Challenge = () => {
  return (
    <div>
        <div class="w-max h-[5rem]">
        <div class="text-white sm:text-3xl max-w-[100vw] font-extrabold mt-[3rem] pl-[5rem] px-4 py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">THE CHALLENGE</div>
        </div>
        <div className="mt-[4rem]">
            <div className="max-w-[100vw] mb-[4rem] text-white text-sm">This is a 48-hour virtual event that is open to start-ups in APAC that are working on complementary or augmented solutions that align with the event's themes. Participants will study the FIS ecosystem using publicly available products and API documentation. Submissions will include a theme-specific pitch deck that outlines defined problem statements and how the proposed solution--offered either as a standalone option or via the FIS Code Connect API marketplace--can deliver innovation in fintech. Participants can also suggest new APIs that may help to enhance the solution further.</div>
            <img src={chess} class="max-w-[100vw]" alt="chess"></img>
        </div>
    </div>
  )
}

export default Challenge