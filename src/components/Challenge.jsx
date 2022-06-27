import React from 'react'
import chess from '../assets/chess.png'
const Challenge = () => {
  return (
    <div>
        <div class="h-[5rem] w-max max-w-[100vw]">
        <div class="font-titilium text-white sm:pl-[4rem] sm:pr-[1rem] px-[1rem] text-4xl font-extrabold max-w-[100vw] mt-[3rem] py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">THE CHALLENGE</div>
        </div>
        <div className="mt-6">
            <div className="sm:max-w-[50vw] mx-4 mb-[4rem] sm:ml-[4rem] text-white text-sm">This is a 48-hour virtual event that is open to start-ups in APAC that are working on complementary or augmented solutions that align with the event's themes. Participants will study the FIS ecosystem using publicly available products and API documentation. Submissions will include a theme-specific pitch deck that outlines defined problem statements and how the proposed solution--offered either as a standalone option or via the FIS Code Connect API marketplace--can deliver innovation in fintech. Participants can also suggest new APIs that may help to enhance the solution further.</div>
            <img src={chess} class="mx-auto max-w-[90vw] sm:ml-[4rem]" alt="chess"></img>
        </div>
    </div>
  )
}

export default Challenge