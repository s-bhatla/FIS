import React from "react";
import styled from "styled-components/macro";

import CompanyLogo from "../assets/fis.svg";

const Wrapper = styled.div``;
const LogoImg = styled.img`
  width: 69.5px;
  height: 29px;
  vertical-align: middle;
`;

const Logo = () => {
  return (
    <Wrapper>
      <LogoImg src={CompanyLogo} />
    </Wrapper>
  );
};

export default Logo;
