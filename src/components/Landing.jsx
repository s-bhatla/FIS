import React from "react";
import logo from "../assets/logo.png";

export const Landing = () => {
  return (
    <div className="landing flex flex-row-reverse mt-[4rem]">
      {/* <div className="landing-img-div">
        <img className="landing-img mx-auto my-auto" src={landingImg} alt="Innovate IN48"></img>
      </div> */}
      <div className="landing-text sm:max-w-[45vw] my-auto mx-auto md:mr-auto md:sm:ml-[108px]">
        <div className="logo">
          <img
            className="pb-3"
            src={logo}
            alt="Innovate India IN48 Partner Edition"
          ></img>
        </div>
        <div className=" font-titilium font-extrabold text-[48px] leading-none pb-2">
          INNOVATE THE NEXT FINTECH DISRUPTION
        </div>
        <div className="date pb-3 text-[26px] font-semibold">
          August 26 - September 3
        </div>
        <div className="summary pb-3 text-[16px]">
          The world is changing and changing fast. Fintech is going to lead the
          way to a better tomorrow. FIS is inviting APAC start-ups to join the
          journey to create the next fintech disruption. Join this 48-hour
          Ideathon to innovate around data, AI and Web3. Create standalone
          solutions or integrate with the FIS ecosystem to build the future of
          fintech.
        </div>
        {/* <div className="reg-btn py-3 sm:pb-0"><RegisterButton/></div> */}
      </div>
    </div>
  );
};
