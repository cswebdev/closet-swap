import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/StoreItemStyles.css";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function StoreItem({ myFilter }) {
   // console.log("this is item filter", itemFilter);
   const [itemListings, setItemListings] = useState([]);
   const { cartItems, setCartItems } = useOutletContext();
   // const [userProfile, setUserProfile] = useState();
   const navigate = useNavigate();

   useEffect(() => {
      const getItems = async () => {
         const response = await fetch(`/api_v1/closet/items/`);
         if (!response.ok) {
            throw new Error("Network response not ok");
         }

         const data = await response.json();

         // console.log(setCartItems);
         setItemListings(data);
      };
      getItems();
   }, []);

   const handleError = (err) => {
      console.warn.log(err);
   };

   const itemListingsHTML = [];

   const {
      genderFilter,
      categoryFilter,
      sizeFilter,
      styleFilter,
      colorFilter,
   } = myFilter;

   console.log({ itemListings });

   const filteredData = itemListings.filter((item) => {
      if (
         (colorFilter !== undefined && item.color !== colorFilter) ||
         (sizeFilter !== undefined && item.size !== sizeFilter) ||
         (genderFilter !== undefined && item.gender !== genderFilter) ||
         (categoryFilter !== undefined && item.category !== categoryFilter) ||
         (styleFilter !== undefined && item.style !== styleFilter)
      ) {
         return false;
      }
      return true;
   });

   console.log({ filteredData });

   for (let i = 0; i < filteredData.length; i += 3) {
      itemListingsHTML.push(
         <Row className="overflow-hidden m-auto" key={nanoid()} id="row-item">
            {filteredData.slice(i, i + 3).map((item) => (
               <Col
                  className="col p-0 mt-1 ms-3 me-3 mb-2 g-0 overflow-hidden "
                  key={item.id}
                  id="col-item"
               >
                  <Card style={{ width: "16rem" }}>
                     <div
                        className="p-0 m-0 g-0 overflow-hidden"
                        id="div-card-img"
                     >
                        <Card.Img
                           variant="top"
                           src={item.image}
                           className="CardImg   "
                        />
                     </div>
                     <Card.Body className="d-flex flex-column  m-0 p-0">
                        <div id="item-user-avatar">
                           <img
                              src={item.user_avatar}
                              alt="avatar"
                              id="item-user-avatar"
                              onClick={() =>
                                 navigate(`/users/${item.user_profile_id}`)
                              }
                           />
                        </div>
                        <Card.Title className="p-1 m-1 text-center">
                           {item.title}
                        </Card.Title>
                        <Card.Text className="ps-1 m-0">
                           brand: {item.brand}
                        </Card.Text>
                        <Card.Text className="ps-1 m-0">
                           color: {item.color}
                        </Card.Text>
                        <Card.Text className="ps-1 m-0">
                           size: {item.size}
                        </Card.Text>
                        <Card.Text className="ps-1 m-0">
                           condition: {item.condition}
                        </Card.Text>
                        <Card.Text className="ps-1 m-0">
                           gender: {item.gender}
                        </Card.Text>
                        <Card.Text className="ps-1 m-0">
                           category: {item.category}
                        </Card.Text>
                        <Card.Text className="ps-1 m-0">
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
