import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import CustomButton from './components/button1.jsx'
import  './components/button1.jsx';


export default function Navbar_novo() {
  
  const handleReshap = () => {
    // This will reload the page; you can replace it with any other action you like.
    window.location.reload();
  };

  return (
    <Navbar 
    shouldHideOnScroll
      maxWidth="full" 
      position="sticky" 
        
      color= '#f96d00'
      className="custom-navbar"
    >
      {/* Logo aligned to the start */}
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>

    

      {/* Right-aligned Navbar items */}
      <NavbarContent justify="end" className="custom-navbar-content">
        <NavbarItem className="hidden lg:flex">
        <button className="custom-button">1. Sobre</button>
        
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
        <button className="custom-button">2. Projetos</button>
        
        </NavbarItem>
        <NavbarItem>
        <button className="custom-button">3. Contato</button>

        </NavbarItem>
        {/* Reshap Button */}
        <NavbarItem>
          <button className="custom-button"><p style={{fontWeight: '400', fontSize: '15px'}}>04.</p>Habilidades</button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
