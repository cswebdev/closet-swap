import { Navigate, NavLink } from "react-router-dom";
import { useNavigate, useOutlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
   return (
      <Navbar bg="light" expand="md">
         <Container>
            <Navbar.Brand href="#home">Closet Swap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to ="/donate">Donate</NavLink>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;
