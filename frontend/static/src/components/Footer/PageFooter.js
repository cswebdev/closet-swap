import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./PageFooterStyles.css";

function PageFooter() {
   return (
      <Container fluid className="footer-container">
         <Row className="footer-row">
            <Col className="col-3-md footer-col text-muted">
               <h5 className="footer-title">About Us</h5>
            </Col>
         </Row>
      </Container>
   );
}
export default PageFooter;
