import { Navigate, NavLink } from "react-router-dom";
import { useNavigate, useOutlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { IconUserCircle } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";

function Header() {
   return (
      <Navbar bg="light" expand="md">
         <Container>
            <IconUserCircle className="me-2" />
            <Navbar.Brand href="#home">Closet Swap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <NavLink to="/home" className="m-2">
                     Home
                  </NavLink>
                  <NavLink to="/login" className="m-2">
                     Login
                  </NavLink>
                  <NavLink to="/register" className="m-2">
                     Register
                  </NavLink>
                  <NavLink to="/donate" className="m-2">
                     Donate
                  </NavLink>
                  <NavLink to="/store" className="m-2">
                     Store
                  </NavLink>
               </Nav>
               {/* <input
                  type="text"
                  className="form-control w-25 float-left"
               ></input>
               <span>
                  <IconSearch className="ms-2" />
               </span> */}
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;
