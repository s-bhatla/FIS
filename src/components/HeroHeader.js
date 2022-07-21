import React from "react";
import clsx from "clsx";
import styled from "styled-components/macro";

const HeroHeader = ({ content, className = [] }) => {
  return (
    <HeroTextItem className={clsx("!text-3xl md:!text-5xl font-extrabold")}>
      {content}
    </HeroTextItem>
  );
};

const HeroTextItem = styled.p`
  /* font-size: 48px; */
  /* font-weight: 800; */
  /* line-height: 1.1; */
`;

export default HeroHeader;
