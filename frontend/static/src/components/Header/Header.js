import { Navigate, NavLink } from "react-router-dom";
import { useNavigate, useOutlet } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { IconTextSize, IconUserCircle } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconMessageCircle2Filled } from "@tabler/icons-react";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Cookies from "js-cookie";

function Header(user) {
   const [isAuth, setAuth] = useState(false);
   const navigate = useNavigate();

   const handleLogout = async () => {
      const response = await fetch("/dj-rest-auth/logout/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: JSON.stringify(user),
      });

      const data = await response.json();
      Cookies.remove("Authorization", `Token ${data.key}`);
      if (response.ok) {
         setAuth(false);

         navigate("/home");
      }
   };
   return (
      <Navbar expand="md">
         <Container>
            <Navbar.Brand>
               <NavLink to="/home" className="m-2" id="header">
                  Closet Swap
               </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <NavLink to="/login" className="m-2">
                     Login
                  </NavLink>
                  <NavLink to="/donate" className="m-2">
                     Donate
                  </NavLink>
                  <NavLink to="/shop" className="m-2">
                     Shop
                  </NavLink>
               </Nav>
               <Nav>
                  <NavLink to="/checkout" className="m-2">
                     <IconShoppingBag
                        style={{ width: "40px", height: "40px" }}
                        className="m-2"
                        type="button"
                     />
                  </NavLink>
                  <Dropdown>
                     <Dropdown.Toggle
                        variant="outline-primary"
                        id="dropdown-basic"
                        className="border-0"
                     >
                        <IconUserCircle
                           className="p-0 "
                           id="header-dropdown"
                           style={{ width: "40px", height: "40px" }}
                        />
                     </Dropdown.Toggle>
                     <Dropdown.Menu>
                        <Dropdown.Item className="p-3">
                           <div type="btn" onClick={() => navigate("/profile")}>
                              Profile
                           </div>
                        </Dropdown.Item>

                        <Dropdown.Item className="p-3" onClick={handleLogout}>
                           logout
                        </Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;
