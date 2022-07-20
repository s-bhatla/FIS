import React from "react";
import styled from "styled-components/macro";

const Work = () => {
  return (
    <div
      id="work"
      //  className="md:sm:ml-[108px]"
    >
      <div
      // class="h-[5rem] w-max max-w-[100vw] mx-auto"
      >
        <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">
          HOW DOES THIS WORK?
        </div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
      </div>
      <div class="flex flex-row mt-8 justify-between work-body">
        <div class="my-auto work-body-text">
          <div className="text-white text-[16px] sm:max-w-[35vw] mt-[2rem]">
            To celebrate our culture of co-creation, innovation and
            collaboration, we invite you to be a part of the virtual FIS
            InnovateIN48 Ideathon. This event encourages experiential learning
            and harnesses the possibilities of emerging technology.
          </div>
          <div className="text-white text-[16px] sm:max-w-[35vw] mt-[2rem] pb-[3rem]">
            If you're an APAC-based start-up whose solutions align with the
            event's themes (data innovation, AI in fintech, and digital assets)
            this event is the place to be. Bring your passion for ideation,
            prototyping and fintech solutions to the table. Your pitch deck
            should explain how your solution can work within the FIS ecosystem
            to solve current industry challenges.
          </div>
        </div>
        <SubmissionChecklistCard>
          <div className="heading font-titilium pb-[24px] text-[30px] ml-[-1.25rem]">
            SUBMISSION CHECKLIST
          </div>
          <div className="work-checklist text-[1.6rem]">
            <ul style={{ listStyleType: "disc" }}>
              <li>2 minute video (optional)</li>
              <li>Theme specific pitch deck with the idea</li>
              <li>FIS APIs used/requested (if any)</li>
            </ul>
          </div>
        </SubmissionChecklistCard>
        {/* <div className="work-div py-[40px] px-[62px]">
          <div className="heading font-titilium pb-[24px] text-[30px] ml-[-1.25rem]">
            SUBMISSION CHECKLIST
          </div>
          <div className="work-checklist text-[1.6rem]">
            <ul>
              <li>2 minute video (optional)</li>
              <li>Theme specific pitch deck with the idea</li>
              <li>FIS APIs used/requested (if any)</li>
            </ul>
          </div>
        </div> */}
      </div>
      <div class="flex flex-row flex-wrap mt-[2rem] justify-between sm:justify-between mx-auto event-times">
        <div className=" small-center">
          <div class="text-[24px] font-semibold gap-1 mt-4 text-[#4BCD3E]">
            IDENTIFY
          </div>
          <div class="text-white text-[16px]  max-w-xs mt-4">
            Identify the relevant problem statements on the basis of this year’s
            themes, get acquainted with the FIS ecosystem, its products and API
            documentation.
          </div>
        </div>
        <div className="small-center">
          <div class="text-[24px] font-semibold gap-1 mt-4  text-[#4BCD3E]">
            IDEATE
          </div>
          <div class="text-white text-[16px] max-w-xs mt-4">
            Join the virtual launch event to understand FIS ecosystem and FIS
            API's. Meet key industry mentors, product, and strategy
            stakeholders. Get an opportunity to interact with other
            participating start-ups. Join FIS partner workshops.
          </div>
        </div>
        <div className="small-center">
          <div class="text-[24px] font-semibold gap-1 mt-4  text-[#4BCD3E]">
            SUBMIT
          </div>
          <div class="text-white text-[16px] max-w-[20rem] mt-4 sm:sm:mr-[108px]">
            Submissions will include a pitch deck, describing a specific problem
            statement and how the partner’s solution(standalone or via FIS
            integration) can bring innovative solutions to the table. Start-up
            can also suggest new FIS APIs that may contribute to enhancing the
            solution further.
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmissionChecklistCard = styled.div`
  --max-width: 524px;
  width: var(--max-width);
  border-radius: 10px;
  background: rgb(0, 151, 117);
  padding: 1em 2em;
  background: linear-gradient(
    90deg,
    rgba(0, 151, 117, 1) 0%,
    rgba(40, 91, 197, 1) 100%
  );
`;

export default Work;
