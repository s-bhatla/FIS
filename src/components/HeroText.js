import React from "react";
import styled from "styled-components/macro";

const HeroText = ({ children }) => {
  return <HeroTextItem>{children}</HeroTextItem>;
};

const HeroTextItem = styled.p`
  font-size: 16px;
  font-family: "Source Sans Pro";
  font-weight: 400;
`;

export default HeroText;
