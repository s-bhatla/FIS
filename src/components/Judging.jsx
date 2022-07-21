import React from "react";

const Judging = () => {
  return (
    <div id="judging">
      <div class="h-[5rem] max-w-[100vw] mb-[4rem] mx-auto">
        <div className="font-titilium text-white text-4xl py-4 font-extrabold mt-[3rem] text-center">
          WHAT'S THE JUDGING CRITERA ?
        </div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
      </div>
      <div className="md:mx-auto margintop-small">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="bg-[rgb(29,29,29)] h-28 flex xx l mb-3 mx-4 md:my-2 md:mr-2 md:mx-0 font-bold text-[23px]">
              <div className="my-auto px-3">Problem Statement: 30 Points</div>
            </div>
            <div className="xx-d r bg-[rgb(29,29,29)] h-28 mx-4 md:mx-0 flex mb-3 md:my-2 md:mr-2">
              <div className="my-auto px-3 text-[18px]">
                Did the partner identify a unique problem statement in line with
                ideathon themes?
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="yy l bg-[rgb(29,29,29)] h-28 flex mx-4 md:mx-0 mb-3 md:my-2 md:mr-2 font-bold text-md text-[23px]">
              <div className="my-auto px-3">Solution: 30 Points</div>
            </div>
            <div className="yy-d r bg-[rgb(29,29,29)] h-28 flex mx-4 md:mx-0 mb-3 md:my-2 md:mr-2">
              <div className="my-auto px-3 text-[18px]">
                Did the solution use innovative and emerging technologies
                resulting in an improved user experience and/or a cost/revenue
                benefit?
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="zz l bg-[rgb(29,29,29)] h-28 flex mb-3 mx-4 md:mx-0 md:my-2 md:mr-2 font-bold text-md text-[23px]">
              <div className="my-auto px-3">Co-Creation: 40 Points</div>
            </div>
            <div className="zz-d r bg-[rgb(29,29,29)] h-28 mx-4 md:mx-0 flex mb-3 md:my-2 md:mr-2">
              <div className="my-auto px-3 text-[18px]">
                Did this solution include the use of a partner IP that can
                shorten time to market ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judging;
