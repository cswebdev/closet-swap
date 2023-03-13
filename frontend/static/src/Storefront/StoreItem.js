import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

function StoreItem(setClothingItem) {
   const [itemListings, setItemListings] = useState([]);

   useEffect(() => {
      const getItems = async () => {
         const response = await fetch(
            `/api_v1/closets/items/${setClothingItem.id}`
         );
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

   const itemListingsHTML = itemListings.map(() => {
      return (
         <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
            </Card.Body>
         </Card>
      );
   });

   return <div>{itemListingsHTML}</div>;
}

export default StoreItem;
