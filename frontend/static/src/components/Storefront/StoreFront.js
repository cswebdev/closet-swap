import "../Styles/StoreFrontStyles.css";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { IconBrandMatrix, IconCheckbox, IconSearch } from "@tabler/icons-react";
import Form from "react-bootstrap/Form";
import StoreItem from "./StoreItem";

const genderChoices = {
   Male: "Male",
   Female: "Female",
   Unisex: "Unisex",
};

const categoryChoices = {
   Tops: "Tops",
   Bottoms: "Bottoms",
   Dresses: "Dresses",
   Outerwear: "Outerwear",
   Activewear: "Activewear",
};

const subCategoryChoicesTops = {
   TShirts: "T-Shirts",
   Blouses: "Blouses",
   Shirts: "Shirts",
   Sweaters: "Sweaters",
   Hoodies: "Hoodies",
   TankTops: "Tank Tops",
   Jackets: "Jackets",
};

const subCategoryChoicesBottoms = {
   Pants: "Pants",
   Shorts: "Shorts",
   Skirts: "Skirts",
   Leggings: "Leggings",
};

const subCategoryChoicesDresses = {
   MaxiDresses: "Maxi Dresses",
   MiniDresses: "Mini Dresses",
   MidiDresses: "Midi Dresses",
   ShiftDresses: "Shift Dresses",
   HalterDresses: "Halter Dresses",
   CocktailDresses: "Cocktail Dresses",
   EveningDresses: "Evening Dresses",
};

const colorChoices = {
   Black: "Black",
   Gray: "Gray",
   White: "White",
   Ivory: "Ivory",
   Tan: "Tan",
   Brown: "Brown",
   Purple: "Purple",
   Blue: "Blue",
   Teal: "Teal",
   Green: "Green",
   Red: "Red",
   Pink: "Pink",
   Orange: "Orange",
   Yellow: "Yellow",
};

function StoreFront() {
   const [isChecked, setIsChecked] = useState({
      male: false,
      female: false,
      unisex: false,
      tops: false,
      bottoms: false,
      dresses: false,
      skirts: false,
      pants: false,
      shorts: false,
      activewear: false,
      outerwear: false,
      tshirts: false,
      blouses: false,
      shirts: false,
   });

   const handleFilterInput = (event) => {
      const { name } = event.target;
      setIsChecked({ ...isChecked, [name]: !isChecked[name] });
   };

   return (
      <Container id="container-storefront">
         <div id="searchbar" className="col-9 d-flex p-5 float-end">
            <input type="text" className="form-control"></input>
            <span>
               <IconSearch className="ms-2" />
            </span>
         </div>
         {/* Left  Side Panel*/}
         <Container className="d-flex pt-4">
            <Form className="w-25 bg-info ">
               <Container id="panel-filter">
                  <section id="filter-section1" className="d-flex-column">
                     <h6>Filter item here</h6>
                     <div className="ps-3">
                        <p className="mb-0">Gender:</p>
                        {Object.entries(genderChoices).map(
                           ([code, name], index) => (
                              <Form.Check
                                 key={index}
                                 type="checkbox"
                                 label={name}
                                 name={code}
                                 checked={isChecked[code]}
                                 onChange={handleFilterInput}
                              />
                           )
                        )}
                     </div>
                  </section>
                  <section id="filter-section2">
                     <h6>Filter item here</h6>
                     <div className="ps-3">
                        <p className="m-0">Category:</p>
                        {Object.entries(categoryChoices).map(
                           ([code, name], index) => (
                              <Form.Check
                                 key={index}
                                 type="checkbox"
                                 label={name}
                                 name={code}
                                 checked={isChecked[code]}
                                 onChange={handleFilterInput}
                              />
                           )
                        )}
                     </div>
                  </section>
                  <section id="filter-section3">
                     <h6>Filter item here</h6>
                     <div className="ps-3">
                        <p className="m-0">Category:</p>
                        {Object.entries(subCategoryChoicesTops).map(
                           ([code, name], index) => (
                              <Form.Check
                                 key={index}
                                 type="checkbox"
                                 label={name}
                                 name={code}
                                 checked={isChecked[code]}
                                 onChange={handleFilterInput}
                              />
                           )
                        )}
                     </div>
                     <section id="filter-section4">
                        <h6>Filter item here</h6>
                        <div className="ps-3">
                           <p className="m-0">Category:</p>
                           {Object.entries(subCategoryChoicesBottoms).map(
                              ([code, name], index) => (
                                 <Form.Check
                                    key={index}
                                    type="checkbox"
                                    label={name}
                                    name={code}
                                    checked={isChecked[code]}
                                    onChange={handleFilterInput}
                                 />
                              )
                           )}
                        </div>
                     </section>
                     <section id="filter-section5">
                        <h6>Filter item here</h6>
                        <div className="ps-3">
                           <p className="m-0">Category:</p>
                           {Object.entries(subCategoryChoicesDresses).map(
                              ([code, name], index) => (
                                 <Form.Check
                                    key={index}
                                    type="checkbox"
                                    label={name}
                                    name={code}
                                    checked={isChecked[code]}
                                    onChange={handleFilterInput}
                                 />
                              )
                           )}
                        </div>
                     </section>
                     <section id="filter-section6">
                        <h6>Filter item here</h6>
                        <div className="ps-3">
                           <p className="m-0">Color:</p>
                           {Object.entries(colorChoices).map(
                              ([code, name], index) => (
                                 <Form.Check
                                    key={index}
                                    type="checkbox"
                                    label={name}
                                    name={code}
                                    checked={isChecked[code]}
                                    onChange={handleFilterInput}
                                 />
                              )
                           )}
                        </div>
                     </section>
                  </section>
               </Container>
            </Form>
            {/* Right Side Panel */}
            <Container id="panel-store" className="w-75 bg-light">
               <section>{/* <h2>Browse Items here</h2> */}</section>
               <Container className="d-flex ">
                  <StoreItem />
               </Container>
            </Container>
         </Container>
      </Container>
   );
}

export default StoreFront;
