import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./PageFooterStyles.css";

function PageFooter() {
   return (
      <Container fluid className="footer-container d-flex align-items-center">
         <Row className="footer-row">
            <Col className="col-3-md footer-col text-muted ">
               <h3 className="footer-title">Created by Chelsea Snider</h3>
               <h7>@ Carolina Code School 2023</h7>
            </Col>
         </Row>
      </Container>
   );
}
export default PageFooter;
