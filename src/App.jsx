import Navbar_novo from "./components/navbar";
import Image from "./components/Image";
import Typewriter from "./components/typed";
import Cards1 from "./components/cards";
import { Button } from "@nextui-org/react";
import FRONT from "./components/Front";
import ScrollRevealWrapper from "./components/wrapper";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import About from "./components/about"
import Contact from "./components/contact"

function App() {
  return (
    <div
      style={{
        backgroundColor: "#111d5e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
        width: "100vw",
        height: "100vh"
      }}
    >
      <Navbar_novo />
      <div>


          <FRONT />
        <About />
      </div>
      <div>

        <Cards1 />
<div>
  <Contact/>
</div>

      </div>
    </div>
  );
}

export default App;
