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
   const [order_Items, setOrder_Items] = useState([]);
   const numItems = cartItems.length;

   //using slice to remove cart item from cartItems array
   const removeCartItem = async (id) => {
      const index = cartItems.findIndex((item) => item.id === id);
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
   };

   const handleCheckout = async () => {
      // setOrder_Items(cartItems); // update order_Items state with cartItems
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: JSON.stringify({ order_items: cartItems }), // pass order_Items to the body
      };
      const response = await fetch("/api_v1/closet/orders/", options);
      if (!response.ok) {
         throw new Error("Network response not okay - order not saved");
      }
      const data = await response.json();
      console.log("checkout data:", data);

      //setCartItems([]); // clear cartItems after successful checkout
   };

   // const handleCheckout = async () => {
   //    const setOrder_Items = [...cartItems];
   //    const options = {
   //       method: "POST",
   //       headers: {
   //          "Content-Type": "application/json",
   //          "X-CSRFToken": Cookies.get("csrftoken"),
   //       },
   //       body: JSON.stringify(...setOrder_Items),
   //    };
   //    const response = await fetch("/api_v1/closet/orders/", options);
   //    if (!response.ok) {
   //       throw new Error("Network response not okay - order not saved");
   //    }
   //    const data = await response.json();
   //    console.log("checkout data:", data);

   //    //setCartItems([]);
   // };
   console.log("checkout test:", { cartItems });

   const cartItemsHTML = cartItems.map((item) => (
      <Row>
         <Col className="col p-0 m-1 g-0 d-flex" key={item.id} id="col-item">
            <section className="d-flex me-1" id="item-section">
               <img
                  src={item.image}
                  alt=""
                  id="checkout-image"
                  style={{ height: "12rem", width: "12rem" }}
               />
               <div
                  className="position-relative flex-column"
                  style={{ height: "12rem", width: "80vh" }}
               >
                  <h4 className="ms-1 mb-2">{item.title}</h4>
                  <p className="ms-1 mb-0 mt-0">Brand: {item.brand}</p>
                  <p className="ms-1 mb-0 mt-0">Color: {item.color}</p>
                  <p className="ms-1 mb-0 mt-0">Size: {item.size}</p>
                  <p className="ms-1 mb-0 mt-0">Category: {item.category}</p>
                  <p className="ms-1 mb-0 mt-0">Style: {item.style}</p>
                  <p className="ms-1 mb-0 mt-0">Condition: {item.condition}</p>
                  <IconTrash
                     className="position-absolute bottom-0 end-0 m-2"
                     type="button"
                     onClick={() => removeCartItem(item.id)}
                  />
               </div>
            </section>
         </Col>
      </Row>
   ));

   return (
      <Container id="container-checkout" className="bg-light">
         <h1 className="text-center mt-5 mb-0 pb-0">Checkout</h1>

         <section id="section-checkout-form">
            <Row className="mt-2">
               <h3 className="mt-0 pt-0">items</h3>
               <Col className="d-flex">
                  <Container id="container-checkout-items" className="">
                     <Row>
                        <Col>
                           <section
                              id="checkout-list"
                              className="d-flex flex-column"
                           >
                              {cartItemsHTML}
                           </section>
                        </Col>
                     </Row>
                  </Container>
                  <Container id="container-checkout-info" className="">
                     <Row>
                        <section
                           className="d-flex flex-column bg-white"
                           id="checkout-message"
                        >
                           <Col>
                              <h4>{`Added ${numItems} item${
                                 numItems === 1 ? "" : "s"
                              } to your closet`}</h4>
                              <p>
                                 Thank you for using Closet Swap! We appreciate
                                 your support and hope that our service has
                                 helped you find new items for your closet.
                              </p>
                              <p>
                                 A message with your contact information will be
                                 sent to the donators.
                              </p>
                           </Col>
                           <Button
                              id="checkout-button"
                              className="float-end position-absolute bottom-0 end-0 m-4"
                              onClick={() => handleCheckout()}
                           >
                              Checkout
                           </Button>
                        </section>
                     </Row>
                  </Container>
               </Col>
            </Row>
         </section>
      </Container>
   );
}

export default CheckOut;
