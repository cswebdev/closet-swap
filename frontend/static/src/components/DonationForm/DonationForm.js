import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Styles/DonationFormStyles.css";

function DonationForm() {
   const [clothingItem] = useState({
      title: "",
      category: "",
      brand: "",
      color: "",
      size: "",
      condition: "",
      gender: "",
   });

   return (
      <div>
         <Container id="container-donation">
            <Container id="container-donation-form">
               <Form onSubmit={""}>
                  <Form.Group className="d-flex mt-4">
                     <Form.Label htmlFor="title"></Form.Label>
                     <input
                        id="text"
                        className="form-control w-75 me-2"
                        name="title"
                        type="text"
                        placeholder="title"
                        value={clothingItem.title}
                     />
                     {/* * */}
                     <Form.Label htmlFor="category"></Form.Label>
                     <Form.Control
                        as="select"
                        className="w-25"
                        value={clothingItem.category}
                        // onChange={handleCategoryInput}
                     >
                        <option value="" disabled>
                           Select a category
                        </option>
                        <option value="TOPS">Tops</option>
                        <option value="BOTTOMS">Bottoms</option>
                        <option value="DRESSES">Dresses</option>
                        <option value="SKIRTS">Skirts</option>
                     </Form.Control>
                  </Form.Group>
                  {/* * */}
                  <Form.Group className="d-flex mt-4">
                     <Form.Label htmlFor="brand"></Form.Label>
                     <input
                        id="text"
                        className="form-control w-75 me-2"
                        name="brand"
                        type="text"
                        placeholder="brand"
                        value={clothingItem.brand}
                        // onChange={handleInput}
                     />
                     <Form.Label htmlFor="gender"></Form.Label>
                     <Form.Control
                        as="select"
                        className="w-25"
                        value={clothingItem.gender}
                        // onChange={handleItemGender}
                     >
                        <option value="" disabled>
                           Item Gender
                        </option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="U">Unisex</option>
                     </Form.Control>
                     <Form.Group className="d-flex mt-4">
                        <Form.Label htmlFor=""></Form.Label>
                     </Form.Group>
                  </Form.Group>
               </Form>
            </Container>
         </Container>
      </div>
   );
}

export default DonationForm;
