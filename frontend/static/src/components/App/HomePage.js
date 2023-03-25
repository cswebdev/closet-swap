import { useNavigate } from "react-router-dom";
//import { useState, useEffect } from "react";
import "../Styles/HomePage.css";
import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/PageFooter";
import heroImage from "../../media/7153929.jpg";

function HomePage() {
   const navigate = useNavigate();
   return (
      <>
         <Container id="container-homepage">
            <Container id="hero-container">
               <div className="hero-container">
                  <img
                     src={heroImage}
                     alt="Diverse community"
                     className="hero-image"
                  />
                  <div className="hero-content">
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
               {/* </Container> */}
               {/* <Container id="container-mission" className="d-flex-column"> */}
               <Row className="align-items-center justify-content-center">
                  <p
                     id="mission-top-text"
                     className="text-center font-weight-bold homepage-text position-relative z-index-1"
                  >
                     Closet Swap is a platform that empowers the LGBTQ+
                     community to express their unique identities through
                     fashion without breaking the bank. We we believe in
                     sustainability, affordibility, and inclusivity.
                  </p>
               </Row>
               {/* </Container> */}

               <img
                  src="https://images.unsplash.com/photo-1593091430196-2433358501df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  id="mission-image"
                  alt="mission"
               />

               {/* <Container id="container-mission-bottom" className="d-flex-column"> */}
               <Row className="align-items-center justify-content-center homepage-text">
                  <p id="mission-text-bottom" className="text-center">
                     Finding clothes that fit your unique style can be a hassle.
                     Closet Swap's goal is to make it easier for you to find
                     your authentic style.
                  </p>
               </Row>
               <Row className="align-items-center justify-content-center homepage-text">
                  {/* <img src={MediaAssetHands} alt="hands" id="hands-image" /> */}
               </Row>
            </Container>
         </Container>
         <Footer />
      </>
   );
}

export default HomePage;
