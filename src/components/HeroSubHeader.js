import clsx from "clsx";
import React from "react";
import styled from "styled-components/macro";

const HeroSubHeader = ({ content, className }) => {
  return (
    <HeroTextItem className={clsx("text-lg", "md:text-2xl", "my-[0.75rem]")}>
      {content}
    </HeroTextItem>
  );
};

const HeroTextItem = styled.p`
  /* font-size: 26px; */
  font-weight: 600;
  font-family: Titillium Web;
`;

export default HeroSubHeader;
