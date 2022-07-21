import React from "react";
import styled from "styled-components/macro";

import NavAction from "./NavAction";
import NavItem from "./NavItem";
import MainLogo from "../Logo";
import colors from "../../config/colors";
import { useState, useEffect } from "react";
import hamburger from "../../assets/hamburger.png";

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
  const [isMobile, setisMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 770) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  function navfxn() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const NavItems = [
    { name: "Your Challenge", href: "#challenge" },
    { name: "About Event", href: "#event" },
    { name: "Awards", href: "#prizes" },
    { name: "Criteria", href: "#judging" },
    { name: "Partners", href: "#partners" },
    { name: "Contact Us", href: "#contactus" },
  ];

  return (
    <div>
      {isMobile ? (
        <div>
          <div className="flex flex-row mobile-nav ">
            <MainLogo />
            
            <a onClick={navfxn} className="ml-auto">
              <img src={hamburger} width="62px"></img>
            </a>
          </div>
          <div id="myLinks">
            <a href="#challenge">Your Challenge</a>
            <a href="#event">About Event</a>
            <a href="#prizes">Awards</a>
            <a href="#judging">Criteria</a>
            <a href="#partners">Partners</a>
            <a href="#contactus">Contact Us</a>
            <a href="http://fis.incubatehub.com" class="myButtonNav">Find out more</a>
          </div>
        </div>
      ) : (
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
                href="http://fis.incubatehub.com"
                color={colors.secondary}
              />
            </ActionWrapper>
          </Wrapper>
        </NavContainer>
      )}
    </div>
  );
};

export default NavbarNew;
