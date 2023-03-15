import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/HomePage.css";
import Container from "react-bootstrap/esm/Container";

import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
   return (
      <Container id="container-homepage">
         <Container id="hero-container">
            <div className="hero-container">
               <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-lgbt-pride-day-background_23-2149393281.jpg?w=2000&t=st=1678852239~exp=1678852839~hmac=bbd796ae22848aeca96681fd30b5a51630ec607fbe091e2f63f6b4818b94c1a5"
                  alt="Diverse community"
                  className="hero-image"
               />
               <div className="hero-content">
                  <h1 className="hero-title">
                     Welcome to our diverse community
                  </h1>
                  <p className="hero-text">
                     We strive to create an inclusive environment for everyone.
                     Join us and be a part of our mission to celebrate diversity
                     and promote equality.
                  </p>
                  <button className="hero-button">Join us</button>
               </div>
            </div>
         </Container>
      </Container>
   );
}

export default HomePage;
