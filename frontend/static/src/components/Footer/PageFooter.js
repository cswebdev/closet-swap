import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./PageFooterStyles.css";
import SelfPortrait from "../../media/selfportrait.jpg";

function PageFooter() {
   return (
      <Container
         fluid
         className="footer-container d-flex align-items-center justify-content-center"
      >
         <Row className="footer-row">
            <Col className="col-3-md footer-col text-muted d-flex">
               <img
                  src={SelfPortrait}
                  alt="self-portrait"
                  id="footer-img"
                  className="footer-img"
               />
               <Row className="flex-column">
                  <h3 className="footer-title pt-4">
                     Created by Chelsea Snider
                  </h3>

                  <h6>@ Carolina Code School 2023</h6>
               </Row>
            </Col>
         </Row>
      </Container>
   );
}
export default PageFooter;
