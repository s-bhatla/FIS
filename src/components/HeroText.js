import clsx from "clsx";
import React from "react";
import styled from "styled-components/macro";

const HeroText = ({ children, className }) => {
  return (
    <HeroTextItem
      className={clsx("text-sm", "font-Source", "font-normal", "md:text-base")}>
      {children}
    </HeroTextItem>
  );
};

const HeroTextItem = styled.p``;

export default HeroText;
