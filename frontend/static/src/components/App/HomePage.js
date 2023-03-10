import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/HomePage.css";
import Container from "react-bootstrap/esm/Container";

import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
   return (
      <Container id="container-homepage">
         <Container id="hero-container">
            <h1>Welcome to Closet Swap!</h1>
         </Container>
      </Container>
   );
}

export default HomePage;
