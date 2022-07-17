import React from "react";

const Judging = () => {
  return (
    <div>
        <div class="h-[5rem] w-max max-w-[100vw] mb-[4rem] mx-auto">
        <div className="font-titilium text-white text-4xl py-4 font-extrabold mt-[3rem] text-center">WHAT'S THE JUDGING CRITERA ?</div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
      </div>
      <div className="table sm:ml-[4rem] ml-[1rem]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="xx l cell font-bold text-md">
              <div className="my-auto px-3">Problem Statement: 30 Points</div>
            </div>
            <div className="xx-d r cell">
              <div className="my-auto px-3">
                Did the partner identify a unique problem statement in line with
                ideathon themes?
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="yy l cell font-bold text-md">
              <div className="my-auto px-3">Solution: 30 Points</div>
            </div>
            <div className="yy-d r cell">
              <div className="my-auto px-3">
                Did the solution use innovative and emerging technologies
                resulting in an improved user experience and/or a cost/revenue
                benefit?
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="zz l cell font-bold text-md">
              <div className="my-auto px-3">Co-Creation: 40 Points</div>
            </div>
            <div className="zz-d r cell">
              <div className="my-auto px-3">
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
