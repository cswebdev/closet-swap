import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/CheckoutStyles.css";
import Button from "react-bootstrap/Button";
import StoreItem from "../Storefront/StoreItem";

function CheckOut() {
   // const [cartItems, setCartItems] = useState([]);

   // const handleAddToCart = (item) => {
   //    setCartItems([...cartItems, item]);
   //    console.log("this is a cart item:", cartItems);
   // };

   console.log(cartItems);
   return (
      <Container id="container-checkout" className="bg-info">
         <Row>
            <Col>
               <h1 className="text-center">Checkout</h1>
               <Button onClick={handleAddToCart}></Button>
            </Col>
         </Row>
         <Row className="mt-5">
            <Col>
               <Container id="container-checkout-form">
                  <Row>
                     <Col>
                        <h3>items</h3>
                        <section id="checkout-list">
                           <StoreItem cartItems={cartItems} />
                        </section>
                     </Col>
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default CheckOut;
