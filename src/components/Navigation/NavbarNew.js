import React from "react";
import styled from "styled-components/macro";

import NavAction from "./NavAction";
import NavItem from "./NavItem";
import MainLogo from "../Logo";
import colors from "../../config/colors";

const NavContainer = styled.nav`
  height: 72px;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: black;
`;

const Wrapper = styled.div`
  --max-width: 1064px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - var(--padding) * 2);
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 2em;
`;

const ListItem = styled.li`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  margin-left: 0.65em;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  column-gap: 1em;
`;

const NavbarNew = () => {
  const NavItems = [
    { name: "Your Challenge", href: "#challenge" },
    { name: "About Event", href: "#event" },
    { name: "Awards", href: "#prizes" },
    { name: "Criteria", href: "#judging" },
    { name: "Partners", href: "#partners" },
    { name: "Contact Us", href: "#contactus" },
  ];

  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <MainLogo />
          <List>
            {NavItems.map(({ name, href }) => (
              <ListItem>
                <NavItem label={name} href={href} />
              </ListItem>
            ))}
          </List>
        </Left>
        <ActionWrapper>
          {/* <NavAction label={"Launch Event"} href="#" color={colors.primary} /> */}
          <NavAction
            label={"Find out more"}
            href="#"
            color={colors.secondary}
          />
        </ActionWrapper>
      </Wrapper>
    </NavContainer>
  );
};

export default NavbarNew;
