import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../Styles/StoreItemStyles.css";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";

function StoreItem({ itemFilter, item }) {
   console.log("this is item filter", itemFilter);
   const [itemListings, setItemListings] = useState([]);
   const { cartItems, setCartItems } = useOutletContext();
   // const [cartItems, setCartItems] = useContext();

   useEffect(() => {
      const getItems = async () => {
         const response = await fetch(`/api_v1/closet/items/`);
         if (!response.ok) {
            throw new Error("Network response not ok");
         }
         const data = await response.json();

         let result = data;

         console.log("also", itemFilter);

         result = result.filter(
            (item) =>
               item.gender === itemFilter ||
               item.category === itemFilter ||
               item.size === itemFilter ||
               item.color === itemFilter ||
               item.style === itemFilter ||
               item.condition === itemFilter ||
               !item
         );

         // console.log(setCartItems);
         return setItemListings(result);
      };
      getItems();
   }, [itemFilter, cartItems]);

   // const handleAddToCart = (event, item) => {
   //    event.preventDefault(); // prevent the default behavior of the event
   //    setCartItems([...cartItems, item]);
   //    console.log("this is a cart item:", cartItems);
   //  };

   const handleError = (err) => {
      console.warn.log(err);
   };

   const itemListingsHTML = [];

   for (let i = 0; i < itemListings.length; i += 3) {
      itemListingsHTML.push(
         <Row className="row overflow-hidden" key={nanoid()} id="row-item">
            {itemListings.slice(i, i + 3).map((item) => (
               <Col
                  className="col p-0 m-1 g-0 overflow-hidden"
                  key={item.id}
                  id="col-item"
               >
                  <Card style={{ width: "16rem" }}>
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
                        <Card.Text className="p-0 m-0">
                           brand: {item.brand}
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                           color: {item.color}
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                           size: {item.size}
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                           condition: {item.condition}
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                           gender: {item.gender}
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                           category: {item.category}
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                           style: {item.style}
                        </Card.Text>
                        <Button
                           variant="outline-primary"
                           type="submit"
                           className="mt-1 justify-content-center"
                           onClick={() => setCartItems([...cartItems, item])}
                        >
                           Add to cart
                        </Button>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      );
   }

   return (
      <>
         <div>{itemListingsHTML}</div>
      </>
   );
}

export default StoreItem;
