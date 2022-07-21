import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/fis.svg";

const Container = styled.div`
  --max-width: 1064px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - var(--padding) * 2);
  margin-inline: auto;
`;

const NavEle = styled.li`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
`;

const ActionBtn = styled.a``;

const Navbar = () => {
  let Links = [
    { name: "Your Challenge", link: "#challenge" },
    { name: "About Event", link: "#event" },
    { name: "Awards", link: "#prizes" },
    { name: "Criteria", link: "#judging" },
    { name: "Partners", link: "#partners" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-[100vw] fixed top-0 left-0 mb-[2rem]">
      <div className="lg:flex items-center justify-evenly bg-black py-3 px-[4rem] nav-padding-rem">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800">
          <span className="text-3xl text-indigo-600  mr-[-6rem] z-10  logo-nav">
            <img src={Logo} alt="" />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden bg-black">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`lg:flex lg:items-center  text-[16px] lg:pb-0 pb-12 absolute lg:bg-black lg:static bg-black lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 " : "top-[-490px]"
          }`}>
          {Links.map((link) => (
            <NavEle />
            // <div>
            //   <li
            //     key={link.name}
            //     className="xl:ml-6 mx-[0.5rem] text-[16px] lg:my-0 my-7">
            //     <a
            //       href={link.link}
            //       className="text-white  hover:text-gray-400 duration-500">
            //       {link.name}
            //     </a>
            //   </li>
            // </div>
          ))}
          <li
            key="contact"
            className="lg:ml-4 text-[16px] lg:my-0 my-7 navbar-media mr-[80px]">
            <a
              href="#footer"
              className="text-white hover:text-gray-400 duration-500">
              Contact Us
            </a>
          </li>
          <button>
            <a
              href="#launch"
              class="nav-btn launch-btn inline text-[18px] px-[28px] mx-1 py-[8px] leading-none border-[0.05px] rounded-full text-black border-[#4BCD3E] bg-[#4BCD3E] font-bold hover:bg-black hover:text-[#4BCD3E] btn-trans">
              Launch Event
            </a>
          </button>
          <button>
            <a
              href="#"
              class="nav-btn inline px-[28px] mx-1 py-[8px] text-[18px] leading-none border-[0.05px] rounded-full text-black  bg-white font-bold hover:bg-black hover:text-white btn-trans">
              Find out more
            </a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
