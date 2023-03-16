import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../Styles/StoreItemStyles.css";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function StoreItem({setClothingItem, presigned_url, url, tagsHTML, image_url}) {
   const [itemListings, setItemListings] = useState([]);

   useEffect(() => {
      const getItems = async () => {
         const response = await fetch(`/api_v1/closet/items/`);
         if (!response.ok) {
            throw new Error("Network response not ok");
         }
         const data = await response.json();
         console.log(data);
         setItemListings(data);
      };
      getItems();

      //   const interval = setInterval(() => {
      //      getItems();
      //   }, 1000000);

      //   return () => clearInterval(interval);
   }, []);

   const itemListingsHTML = [];

   for (let i = 0; i < itemListings.length; i += 3) {
      itemListingsHTML.push(
         <Row className="row overflow-hidden" key={nanoid()} id="row-item">
            {itemListings.slice(i, i + 3).map((item) => (
               <Col
                  className="col p-1 m-0 overflow-hidden"
                  key={item.id}
                  id="col-item"
               >
                  <Card style={{ width: "18rem" }}>
                     <div className="p-0 m-0 g-0 overflow-hidden">
                        <Card.Img
                           variant="top"
                           src={item.image}
                           className="CardImg "
                        />
                     </div>
                     <Card.Body className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
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
                        <Button
                           variant="outline-primary"
                           className="mt-1 justify-content-center "
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
