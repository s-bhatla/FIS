import React from "react";
import styled from "styled-components/macro";

import Challenge from "../components/Challenge";
import Event from "../components/Event";
import Hack from "../components/Hack";
import Judging from "../components/Judging";
import Launch from "../components/Launch";
import Navbar from "../components/Navigation/NavbarNew";
import Participate from "../components/Participate";
import Partners from "../components/Partners";
import Prize from "../components/Prize";
import Work from "../components/Work";
import Banner from "../components/Landing";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  --max-width: 1064px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - var(--padding) * 2);
  margin-inline: auto;
  /* border-right: 1px solid red;
  border-left: 1px solid red; */
`;

const Landing = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Wrapper>
        <Hack />
        <Challenge />
        <Work />
        <Event />
        <Participate />
        <Prize />
        <Judging />
        <Launch />
        <Partners />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Landing;
