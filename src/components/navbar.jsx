import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import "./button1.jsx";
import React from "react";
import Stack from "@mui/joy/Stack";
import { FaGithub } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";

export default function Navbar_novo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar maxWidth="full" shouldHideOnScroll className="custom-navbar">
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lucas-moreira-albino-95b624315/"
          >
          <TfiLinkedin />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/snortexware"
          >
          <FaGithub />
          </a>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="custom-button"
          >
            <p className="custom-button-number">01.</p> Sobre
          </button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="custom-button"
          >
            <p className="custom-button-number">02.</p> Projetos
          </button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="custom-button"
          >
            <p className="custom-button-number">03.</p> Contato
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        justify="end"
      />
      <NavbarMenu className="custom-navmenu">
        <NavbarMenuItem>
          <button onClick={()=> document.getElementById("about").scrollIntoView({behavior:"smooth"})} className="custom-button">
            <p className="custom-button-number">01.</p> Sobre
          </button>
          <button className="custom-button">
            <p onClick={()=> document.getElementById("about").scrollIntoView({behavior:"smooth"})} className="custom-button-number">02.</p> Projetos
          </button>
          <button onClick={()=> document.getElementById("contact").scrollIntoView({behavior:"smooth"})} className="custom-button">
            <p className="custom-button-number">03.</p> Contato
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
      <></>
    </Navbar>
  );
}
