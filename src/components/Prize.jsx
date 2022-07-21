import clsx from "clsx";
import React from "react";
import prize from "../assets/prize.png";

const Prize = () => {
  return (
    <div id="prizes">
      <div className={clsx("h-[5rem]", "max-w-[100vw]", "mx-auto")}>
        <div className="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center ">
          WHAT'S IN IT FOR YOU?
        </div>
        <div className="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
      </div>
      <div
        className={clsx(
          "flex",
          "flex-col",
          "md:flex-row",
          "justify-between",
          " mx-auto",
          "margintop-small-prize",
          "prize-body",
          "text-[18px]",
          "font-Source",
          "font-normal"
        )}>
        <div className={clsx("my-auto", "md:w-2/6")}>
          <div className="text-white mt-[2rem] font-semibold">
            The winning team will:
          </div>
          <div className="text-white mt-[0.5rem]">
            • Have the opportunity to work with FIS to build a POC
          </div>
          <div className="text-white mt-[0.5rem]">
            • Get a fast-track application for the FIS Accelerator program
          </div>
          <div className="text-white mt-[0.5rem]">
            • Receive visibility with the FIS Alliance and FIS Ventures programs
          </div>
          <div className="text-white  mt-[0.5rem]">• Win cloud credits</div>
        </div>
        <div className={clsx("mt-6", "md:w-2/4")}>
          <img src={prize} alt="participate" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Prize;
