import React from "react";
import styled from "styled-components/macro";

const HeroSubHeader = ({ content }) => {
  return <HeroTextItem>{content}</HeroTextItem>;
};

const HeroTextItem = styled.p`
  font-size: 26px;
  font-weight: 600;
  font-family: Titillium Web;
`;

export default HeroSubHeader;
