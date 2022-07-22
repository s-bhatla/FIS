import clsx from "clsx";
import React from "react";
import participate from "../assets/participate.png";
const Participate = () => {
  return (
    <div id="participate">
      <div class="h-[5rem]  max-w-[100vw] mb-8 mx-auto">
        <div class="font-titilium text-white text-4xl font-extrabold mt-[3rem] py-4 text-center">
          WHO CAN PARTICIPATE?
        </div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
      </div>
      <div
        className={clsx(
          "flex ",
          "participate-body",
          "flex-col",
          "md:flex-row",
          "max-w-[100vw]",
          "justify-between",
          "mx-auto",
          "margintop-participate"
        )}>
        <div
          className={clsx(
            "sm:max-w-[40vw]",
            "mb-12 ",
            "text-[18px]",
            "md:w-[45%]",
            "font-Source"
          )}>
          <div className="text-white text-md  mt-[1rem]">
            Startups with a technology stack that can solve horizontal problems
            - Customer onboarding, churn detection, customer loyalty, data
            marketplaces, DeFi stacks.
          </div>
          <div className="text-white text-md  mt-[1rem]">
            Fintech startups with innovative business models that can augment
            FIS offering and want broader reach.
          </div>
          <div className="text-white text-md  mt-[1rem]">
            Startups aspiring to build products and platforms leveraging FIS
            API’s.
          </div>
          <div className="text-white text-md mt-[1rem]">
            A group of startups collaborating and providing new capabilities.
            For example: Satellite imaging, drone startups and radar startups
            collaborate and provide alternate data for commodities markets.
          </div>
          <div className="text-white text-md mt-[1rem]">
            Startups having innovating automation and integration platforms.
          </div>
        </div>
        <div className="">
          <img src={participate} alt="participate" />
        </div>
      </div>
    </div>
  );
};

export default Participate;
