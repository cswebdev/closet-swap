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
            <Col className="text-muted d-flex mt-0">
               <img
                  src={SelfPortrait}
                  alt="self-portrait"
                  id="footer-img"
                  className="footer-img"
               />
               <Row className="flex-column p-0 mb-0 mt-4">
                  <h3 className="footer-title pt-1 mb-0 mt-0 pb-0">
                     Created by Chelsea Snider
                  </h3>
                  <h6 className="m-0 p-0 ">@ Carolina Code School 2023</h6>
               </Row>
            </Col>
         </Row>
      </Container>
   );
}
export default PageFooter;
