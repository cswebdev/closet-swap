import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/HomePage.css";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
   const navigate = useNavigate();
   return (
      <>
         <Container id="container-homepage">
            <Container id="hero-container">
               <div className="hero-container">
                  <img
                     src="https://img.freepik.com/free-vector/had-drawn-flat-lgbt-pride-day-background_23-2149393281.jpg?w=2000&t=st=1678852239~exp=1678852839~hmac=bbd796ae22848aeca96681fd30b5a51630ec607fbe091e2f63f6b4818b94c1a5"
                     alt="Diverse community"
                     className="hero-image"
                  />
                  <div className="hero-content">
                     <h1 className="hero-title"></h1>
                     <p className="hero-text">
                        We strive to create an inclusive environment for
                        everyone. Join us and be a part of our mission to
                        celebrate diversity and expression.
                     </p>
                     <button
                        type="button"
                        onClick={() => navigate("/register")}
                        className="hero-button mt-5"
                     >
                        Join us
                     </button>
                  </div>
               </div>
            </Container>
            <Container id="container-mission" className="d-flex-column">
               <Row className="align-items-center justify-content-center">
                  <p
                     id="mission-top-text"
                     className="text-center font-weight-bold"
                  >
                     Our Mission at Closet Swap is to help lgbtq community and
                     our allies to become the best version of themselves!
                     Express yourself to the fullest with style!
                  </p>
               </Row>
            </Container>
         </Container>
         <Row className="aign-items-center justify-content-center">
            <img
               src="https://images.unsplash.com/photo-1593091430196-2433358501df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
               id="mission-image"
            />
         </Row>
         <Container>
            <Container id="container-mission-bottom" className="d-flex-column">
               <Row className="align-items-center justify-content-center">
                  <p id="mission-text-bottom" className="text-center">
                     We encourage you to donate your clothes with others and
                     help our communities.
                  </p>
               </Row>
            </Container>
         </Container>
      </>
   );
}

export default HomePage;
