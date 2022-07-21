import React from "react";
import prize from "../assets/prize.png";
const Prize = () => {
  return (
    <div id="prizes">
      <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
        <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center ">
          WHAT'S IN IT FOR YOU?
        </div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
      </div>
      <div
        class="flex flex-row justify-between mx-auto margintop-small-prize prize-body text-[18px]"
        style={{ fontFamily: "Source Sans Pro", fontWeight: 400 }}>
        <div className="my-auto" style={{ width: "30%" }}>
          <div className="text-white mt-[2rem] font-semibold">
            The winning team will:
          </div>
          <div className="text-white mt-[0.5rem]">
            <span className="text-[2rem]">•</span> Have the opportunity to work with FIS to build a POC
          </div>
          <div className="text-white mt-[0.5rem]">
            <span className="text-[2rem]">•</span> Get a fast-track application for the FIS Accelerator program
          </div>
          <div className="text-white mt-[0.5rem]">
            <span className="text-[2rem]">•</span> Receive visibility with the FIS Alliance and FIS Ventures programs
          </div>
          <div className="text-white  mt-[0.5rem]"><span className="text-[2rem]">•</span> Win cloud credits</div>
        </div>
        <div className=" mt-6" style={{ width: "55%" }}>
          <img src={prize} alt="participate" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Prize;
