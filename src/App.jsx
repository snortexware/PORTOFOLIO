import Navbar_novo from "./navbar";
import Image from "./components/Image";
import Typewriter from "./typed";
import Cards1 from "./cards";
import { Button } from "@nextui-org/react";
import APR from "./components/apr";
import ScrollRevealWrapper from "./components/wrapper";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import About from "./components/about"

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

        <div>

          <APR />
        </div>
        <About />
      </div>
      <div>


        <Cards1 />

      </div>
    </div>
  );
}

export default App;
