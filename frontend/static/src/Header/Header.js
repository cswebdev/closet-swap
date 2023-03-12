import { Navigate, NavLink } from "react-router-dom";
import { useNavigate, useOutlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { IconUserCircle } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Cookies from "js-cookie";

function Header(user) {
   const handleLogout = async () => {
      const response = await fetch("/dj-rest-auth/logout/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: "",
      });
      const data = await response.json();
      Cookies.remove("Authorization", `Token ${data.key}`);
   };
   return (
      <Navbar bg="light" expand="md">
         <Container>
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
               <Dropdown>
                  <Dropdown.Toggle
                     variant="outline-primary"
                     id="dropdown-basic"
                     className="border-0 p-2"
                  >
                     <IconUserCircle className="p-0" id="header-dropdown" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     <h6>hell`${user.username}</h6>
                     <Dropdown.Item className="p-3">
                        <NavLink to="/profile">Profile</NavLink>
                     </Dropdown.Item>
                     <Dropdown.Item
                        href="#/action-2"
                        className="p-3"
                        onClick={handleLogout}
                     >
                        logout
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>

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
