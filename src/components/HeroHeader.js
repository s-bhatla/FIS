import React from "react";
import styled from "styled-components/macro";

const HeroHeader = ({ content }) => {
  return <HeroTextItem>{content}</HeroTextItem>;
};

const HeroTextItem = styled.p`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  font-family: Titillium Web;
`;

export default HeroHeader;
