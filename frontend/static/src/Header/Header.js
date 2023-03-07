import { Navigate, NavLink } from "react-router-dom";
import { useNavigate, useOutlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";
import HomePage from "../components/App/HomePage";
import Cookies from "js-cookie";

function Header() {
   const Navigate = useNavigate();
   <Navbar bg="light" expand="md">
      <Container>
         <Navbar.Brand href="#home">Upstate News</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <NavLink to="/home">Home</NavLink>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>;
}

export default Header;
