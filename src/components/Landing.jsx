import React from "react";
import RegisterButton from "./RegisterButton";
import landingImg from "../assets/landing-small.png"
import logo from "../assets/logo.png"

export const Landing = () => {
  return (
    <div className="landing sm:flex flex-row-reverse px-auto">
      <div className="landing-img-div">
        <img className="landing-img mx-auto my-auto" src={landingImg} alt="Innovate IN48"></img>
      </div>
      <div className="landing-text my-auto ">
          <div className="logo">
            <img className="pb-3" src={logo} alt="Innovate India IN48 Partner Edition"></img>
          </div>
          <div className="title font-extrabold text-5xl pb-4">INNOVATE THE NEXT FINTECH DISRUPTION</div>
          <div className="date pb-3 font-semibold text-lg">August 12-20</div>
          <div className="summary pb-3">
            The world is changing and changing fast. FinTech is going to lead the
            way for a better tomorrow. FIS is inviting APAC startups to join the
            journey to create the next FinTech disruption. Join 48 hours Ideathon to
            innovate around Data, AI and Web 3. Create standalone solutions or
            integrate with FIS ecosystem to build FinTech future.
          </div>
          <div className="reg-btn pb-3"><RegisterButton/></div>
      </div>
      
    </div>
  );
};
