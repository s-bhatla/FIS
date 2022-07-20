import React from "react";
import styled from "styled-components/macro";

const NavActionLink = styled.a`
  background-color: ${({ color }) => color};
  color: black;
  padding: 0.35em 1.5em;
  border-radius: 25px;
  font-size: 18px;
  font-family: "Source Sans Pro";
`;

const NavAction = ({ label, href, color }) => {
  return (
    <NavActionLink href={href} color={color}>
      {label}
    </NavActionLink>
  );
};

export default NavAction;
