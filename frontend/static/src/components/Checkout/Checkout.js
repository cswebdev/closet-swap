import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/CheckoutStyles.css";

function CheckOut() {
   return (
      <Container id="container-checkout" className="bg-info">
         <Row>
            <Col>
               <h1 className="text-center">Checkout</h1>
            </Col>
         </Row>
         <Row className="mt-5">
            <Col>
               <Container id="container-checkout-form">
                  <Row>
                     <Col>
                        <h3>items</h3>
                        <section id="checkout-list"></section>
                     </Col>
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default CheckOut;
