import styled, { createGlobalStyle } from "styled-components/macro";
import "./App.css";
import Challenge from "./components/Challenge";
import Event from "./components/Event";
import Hack from "./components/Hack";
import Navbar from "./components/Navbar";

import Participate from "./components/Participate";
import Partners from "./components/Partners";
import Prize from "./components/Prize";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { Landing } from "./components/Landing";
import Judging from "./components/Judging";
import Launch from "./components/Launch";

import LandingPage from "./pages/landing";

const GlobalStyle = createGlobalStyle`
  html{
    font-family:'Titillium Web' ;
  }
`;

const Container = styled.div`
  --max-width: 1064px;
  --padding: 1rem;
  width: min(var(--max-width), 100% - var(--padding) * 2);
  margin-inline: auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <LandingPage />
        {/* <Navbar /> */}
        {/* <Landing />
        <Container>
          <Hack />
          <Challenge />
          <Work />
          <Event />
          <Participate />
          <Prize />
          <Judging />
          <Launch />
          <Partners />
        </Container>
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
