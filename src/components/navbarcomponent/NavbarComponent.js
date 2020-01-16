import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Link style={{display: 'flex', justifyContent:'center', alignItems:'center', marginRight: "10px"}} to="/"><b>Home</b></Link>
        <Link style={{display: 'flex', justifyContent:'center' ,alignItems:'center', marginRight: "10px"}} to="/albums">Albums</Link>
        <Link style={{display: 'flex', justifyContent:'center' ,alignItems:'center', marginRight: "10px"}} to="/new-album">New Album</Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
