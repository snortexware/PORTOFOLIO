import Navbar_novo from "./navbar";
import Image from "./components/Image";
import Typewriter from "./typed";
import Cards1 from "./cards";
import { Button } from "@nextui-org/react";
import APR from "./components/apr";
import ScrollRevealWrapper from "./components/wrapper";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#111d5e",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",

      }}
    >
      <Navbar_novo />

      <APR />

      
<div>

      <Cards1 />
</div>
    </div>
  );
}

export default App;
