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
import CustomButton from "./components/button1.jsx";
import "./components/button1.jsx";
import React from "react";
import Stack from "@mui/joy/Stack";

export default function Navbar_novo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleReshap = () => {
    // This will reload the page; you can replace it with any other action you like.
    window.location.reload();
  };

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      position="sticky"
      color="#f96d00"
      className="custom-navbar"

    >
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
        

      <NavbarContent justify="end" className="custom-navbar-content">
        <NavbarItem className="hidden sm:flex">
          <button className="custom-button">
            <p className="custom-button-number">01.</p> Sobre
          </button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <button className="custom-button">
            <p className="custom-button-number">02.</p> Projetos
          </button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <button className="custom-button">
            <p className="custom-button-number">03.</p> Contato
          </button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <button className="custom-button">
            <p className="custom-button-number"> 04.</p>Habilidades
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
          <button className="custom-button">
            <p className="custom-button-number">01.</p> Sobre
          </button>
          <button className="custom-button">
            <p className="custom-button-number">02.</p> Projetos
          </button>
          <button className="custom-button">
            <p className="custom-button-number">03.</p> Contato
          </button>
          <button className="custom-button">
            <p className="custom-button-number"> 04.</p>Habilidades
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
