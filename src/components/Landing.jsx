import React from "react";
import clsx from "clsx";
import styled from "styled-components/macro";

import logo from "../assets/logo.png";

import HeroHeader from "./HeroHeader";
import HeroSubHeader from "./HeroSubHeader";
import HeroText from "./HeroText";

const Landing = () => {
  return (
    <Wrapper>
      {/* <div className="landing-img-div">
        <img className="landing-img mx-auto my-auto" src={landingImg} alt="Innovate IN48"></img>
      </div> */}
      <Container>
        <MainWrapper className={clsx("mt-3", "!w-full", "md:!w-[70%]")}>
          <div className={clsx("logo")}>
            <img
              className={clsx("pb-3", "w-32")}
              src={logo}
              alt="Innovate India IN48 Partner Edition"></img>
          </div>
          <HeroHeader content={"INNOVATE THE"} />
          <HeroHeader content={"NEXT FINTECH DISRUPTION"} />
          <HeroSubHeader content={"August 26 - September 3"} />
          <TextWrapper>
            <HeroText>
              The world is changing and changing fast. Fintech is going to lead
              the way to a better tomorrow. FIS is inviting APAC startups to
              join the journey to create the next fintech disruption. Join this
              48-hour Ideathon to innovate around Data, AI and Web3. Create
              standalone solutions or integrate with the FIS ecosystem to build
              the future of fintech.
            </HeroText>
          </TextWrapper>
          {/* <div className="reg-btn py-3 sm:pb-0"><RegisterButton/></div> */}
        </MainWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media all and (min-width: 768px) {
    margin-top: 72px;
  }
  background-image: url(${require("../assets/hero.png")});
  /* width: 100vw; */
  height: 90vh;
  background-size: cover;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
`;

const TextWrapper = styled.div`
  width: 70%;
`;

const Container = styled.div`
  --max-width: 1064px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - var(--padding) * 2);
  margin-inline: auto;
  display: flex;
  height: 100%;
  align-items: center;
`;

const MainWrapper = styled.div`
  /* width: 70%; */
`;

export default Landing;
