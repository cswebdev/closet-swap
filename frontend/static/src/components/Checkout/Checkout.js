import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Styles/CheckoutStyles.css";
import Button from "react-bootstrap/Button";
import StoreItem from "../Storefront/StoreItem";
import { useOutletContext } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";
import Cookies from "js-cookie";

function CheckOut() {
   const { cartItems, setCartItems } = useOutletContext();
   const [isActive, setIsActive] = useState(true);

   //using slice to remove cart item from cartItems array
   const removeCartItem = async (id) => {
      const index = cartItems.findIndex((item) => item.id === id);
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
   };
   console.log("checkout test:", { cartItems });

   const cartItemsHTML = cartItems.map((item) => (
      <Row className="d-flex">
         <Col
            className="col p-0 m-1 g-0 overflow-hidden"
            key={item.id}
            id="col-item"
         >
            <Card style={{ width: "14rem" }}>
               <div className="p-0 m-0 g-0 overflow-hidden">
                  <Card.Img
                     variant="top"
                     src={item.image}
                     className="CardImg "
                  />
               </div>
               <Card.Body className="d-flex flex-column justify-content-center align-items-center overflow-hidden m-0 p-0">
                  <Card.Title className="p-1 m-1 text-center">
                     {item.title}
                  </Card.Title>
                  <Card.Text className="p-0 m-0">brand: {item.brand}</Card.Text>
                  <Card.Text className="p-0 m-0">color: {item.color}</Card.Text>
                  <Card.Text className="p-0 m-0">size: {item.size}</Card.Text>
                  <Card.Text className="p-0 m-0">
                     condition: {item.condition}
                  </Card.Text>
                  <Card.Text className="p-0 m-0">
                     gender: {item.gender}
                  </Card.Text>
                  <Card.Text className="p-0 m-0">
                     category: {item.category}
                  </Card.Text>
                  <Card.Text className="p-0 m-0">style: {item.style}</Card.Text>
                  {/* <Button
                     variant="outline-primary"
                     type="submit"
                     className="mt-1 justify-content-center"
                     onClick={() => setCartItems([...cartItems, item])}
                  ></Button> */}
                  <IconTrash onClick={() => removeCartItem(item.id)} />
               </Card.Body>
            </Card>
         </Col>
      </Row>
   ));

   return (
      <Container id="container-checkout" className="">
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
                        <section
                           id="checkout-list"
                           className="d-flex flex-nowrap overflow-auto"
                        >
                           {cartItemsHTML}
                        </section>
                     </Col>
                  </Row>
                  <Button variant="outline-primary" type="submit">
                     Checkout
                  </Button>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default CheckOut;
