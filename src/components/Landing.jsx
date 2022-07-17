import React from "react";
import logo from "../assets/logo.png"

export const Landing = () => {
  return (
    <div className="landing flex flex-row-reverse sm:px-[4rem] px-[1rem] mt-[4rem]">
      {/* <div className="landing-img-div">
        <img className="landing-img mx-auto my-auto" src={landingImg} alt="Innovate IN48"></img>
      </div> */}
      <div className="landing-text sm:max-w-[45vw] my-auto md:mr-auto">
          <div className="logo">
            <img className="pb-3" src={logo} alt="Innovate India IN48 Partner Edition"></img>
          </div>
          <div className=" font-titilium title font-extrabold text-5xl pb-4">INNOVATE THE NEXT FINTECH DISRUPTION</div>
          <div className="date pb-3 text-3xl font-bold text-lg">August 26-September 3</div>
          <div className="summary pb-3">
            The world is changing and changing fast. FinTech is going to lead the
            way for a better tomorrow. FIS is inviting APAC startups to join the
            journey to create the next FinTech disruption. Join 48 hours Ideathon to
            innovate around Data, AI and Web 3. Create standalone solutions or
            integrate with FIS ecosystem to build FinTech future.
          </div>
          {/* <div className="reg-btn py-3 sm:pb-0"><RegisterButton/></div> */}
      </div>
      
    </div>
  );
};
