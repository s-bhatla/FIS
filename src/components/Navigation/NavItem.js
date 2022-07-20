import React from "react";
import styled from "styled-components/macro";

const NavItemLink = styled.a`
  font-size: 16px;
  font-family: "Source Sans Pro";
`;

const Wrapper = styled.div``;

const NavItem = ({ label, href }) => {
  return (
    <Wrapper>
      <NavItemLink href={href}>{label}</NavItemLink>
    </Wrapper>
  );
};

export default NavItem;
