import React from "react";
const Work = () => {
  return (
    <div class="">
    <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
    <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">HOW DOES THIS WORK?</div>
    <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
    </div>
    <div class="flex flex-row flex-wrap mt-8 justify-between mx-4 sm:ml-[4rem] sm:mr-[5rem]">
        <div class="my-auto">
          <div className="text-white sm:max-w-[40vw] mt-[2rem]">
            To celebrate our culture of co-creation, innovation and
            collaboration, we invite you to be a part of the virtual FIS
            INNOVATEIN48 Ideathon. This event encourages experiential learning
            and harnesses the possibilities of emerging technology.
          </div>
          <div className="text-white sm:max-w-[40vw] mt-[2rem] pb-[3rem]">
            If you're an APAC-based start-up whose solutions align with the
            event's themes (Data innovation, AI in fintech, and Digital assets
            and blockchain) this event is the place to be. Bring your passion
            for ideation, prototyping and fintech solutions to the table. Your
            pitch deck should explain how your IP can work within the FIS
            ecosystem to solve current industry challenges.
          </div>
        </div>
        <div className="work-div">
          <div className="heading py-[1rem] font-titilium text-3xl ml-[-1.25rem]">
            SUBMISSION CHECKLIST
          </div>
          <div className="work-checklist text-2xl">
            <ul>
              <li>2 minute video (optional)</li>
              <li>Theme specific pitch deck with the idea</li>
              <li>FIS APIs used/requested (if any)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap mt-[2rem] justify-between mx-4 sm:ml-[4rem] event-times">
        <div>
          <div class="text-2xl font-semibold gap-1 mt-4 text-[#4BCD3E]">
            IDENTIFY
          </div>
          <div class="text-white  max-w-xs mt-4">
            Identify the relevant problem statements on the basis of this year’s
            themes, get acquainted with the FIS ecosystem, its products and API
            documentation.
          </div>
        </div>
        <div>
          <div class="text-2xl font-semibold gap-1 mt-4  text-[#4BCD3E]">
            IDEATE
          </div>
          <div class="text-white  max-w-xs mt-4">
            Join the virtual launch event to understand FIS ecosystem and FIS
            API's. Meet key industry mentors, product, and strategy
            stakeholders. Get an opportunity to interact with other
            participating start-ups. Join FIS partner workshops.
          </div>
        </div>
        <div className="">
          <div class="text-2xl font-semibold gap-1 mt-4  text-[#4BCD3E]">
            SUBMIT
          </div>
          <div class="text-white max-w-[20rem] mt-4">
            Submissions will include a pitch deck, describing a specific problem
            statement and how the partner’s IP(standalone or via FIS
            integration) can bring innovative solutions to the table. Start-up
            can also suggest new FIS APIs that may contribute to enhancing the
            solution further.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
