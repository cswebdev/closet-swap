import "../Styles/StoreFrontStyles.css";
import { useState, useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import StoreItem from "./StoreItem";
import MediaAsset from "../../media/playful-vector.png";

const genderChoices = {
   Male: "Male",
   Female: "Female",
   Unisex: "Unisex",
};

const categoryChoices = {
   TOPS: "Tops",
   Bottoms: "Bottoms",
   Dresses: "Dresses",
   Outerwear: "Outerwear",
   Activewear: "Activewear",
};

const sizeChoices = {
   XS: "Extra Small",
   S: "Small",
   M: "Medium",
   L: "Large",
   XL: "Extra Large",
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
      Male: false,
      Female: false,
      Unisex: false,
      Tops: false,
      Bottoms: false,
      Dresses: false,
      Pants: false,
      Activewear: false,
      Outerwear: false,
      TShirts: false,
      Blouses: false,
      Shirts: false,
      Sweaters: false,
      Hoodies: false,
      TankTops: false,
      Jackets: false,
      Shorts: false,
      Skirts: false,
      Leggings: false,
      MaxiDresses: false,
      MiniDresses: false,
      MidiDresses: false,
      ShiftDresses: false,
      HalterDresses: false,
      CocktailDresses: false,
      EveningDresses: false,
      Black: false,
      Gray: false,
      White: false,
      Ivory: false,
      Tan: false,
      Brown: false,
      Purple: false,
      Blue: false,
      Teal: false,
      Green: false,
      Red: false,
      Pink: false,
      Orange: false,
      Yellow: false,
   });
   const [itemFilter, setItemFilter] = useState("");
   // const [storeItems, setStoreItems] = useState([]);
   const { cartItems, setCartItems } = useOutletContext();

   const [genderFilter, setGenderFilter] = useState();
   const [categoryFilter, setCategoryFilter] = useState();
   const [sizeFilter, setSizeFilter] = useState();
   const [styleFilter, setStyleFilter] = useState();
   const [colorFilter, setColorFilter] = useState();

   const data = [
      { color: "red", size: "S", gender: "M" },
      { color: "blue", size: "M", gender: "F" },
      { color: "green", size: "L", gender: "M" },
      { color: "red", size: "M", gender: "F" },
   ];

   const filterData = (items, filters) => {
      return items.filter((item) => {
         return Object.keys(filters).every((key) => {
            return filters[key] === undefined || item[key] === filters[key];
         });
      });
   };

   const handleFilterInput = (event) => {
      const { name } = event.target;
      setIsChecked({ ...!isChecked, [name]: isChecked[name] });
      setItemFilter(name);
      // console.log(event.target);
   };

   console.log("cartItems", { cartItems });
   const myFilter = {
      genderFilter,
      categoryFilter,
      sizeFilter,
      styleFilter,
      colorFilter,
   };
   return (
      <Container id="container-storefront">
         {/* Left  Side Panel*/}
         <Container className="d-flex pt-4">
            <Form className="w-25 bg-info">
               <Container id="panel-filter">
                  <section id="filter-section1">
                     <div className="ps-3">
                        <h6>Filter gender here</h6>

                        {Object.entries(genderChoices).map(
                           ([code, name], index) => (
                              <Form.Check
                                 key={index}
                                 type="checkbox"
                                 label={name}
                                 name={code}
                                 checked={genderFilter === name}
                                 onChange={() =>
                                    genderFilter === name
                                       ? setGenderFilter()
                                       : setGenderFilter(name)
                                 }
                              />
                           )
                        )}
                     </div>
                  </section>
                  <section id="filter-section2">
                     <h6>Filter item here</h6>
                     <div className="ps-3 pb-3">
                        <p className="m-0">Category:</p>
                        {Object.entries(categoryChoices).map(
                           ([code, name], index) => (
                              <Form.Check
                                 key={index}
                                 type="checkbox"
                                 label={name}
                                 name={code}
                                 checked={categoryFilter === name}
                                 onChange={() =>
                                    categoryFilter === name
                                       ? setCategoryFilter()
                                       : setCategoryFilter(name)
                                 }
                              />
                           )
                        )}
                     </div>
                  </section>
                  <section id="filter-section3">
                     <div className="ps-3">
                        <p className="m-0">Size:</p>
                        {Object.entries(sizeChoices).map(
                           ([code, name], index) => (
                              <Form.Check
                                 key={index}
                                 type="checkbox"
                                 label={name}
                                 name={code}
                                 checked={sizeFilter === name}
                                 onChange={() =>
                                    sizeFilter === name
                                       ? setSizeFilter()
                                       : setSizeFilter(name)
                                 }
                              />
                           )
                        )}
                     </div>
                  </section>
                  <section id="filter-section4">
                     <h6>Filter item here</h6>
                     <div className="ps-3">
                        <p className="m-0 bg">Category:</p>
                        {Object.entries(subCategoryChoicesTops).map(
                           ([code, name], index) => (
                              <Form.Check
                                 key={index}
                                 type="checkbox"
                                 label={name}
                                 name={code}
                                 checked={styleFilter === name}
                                 onChange={() =>
                                    styleFilter === name
                                       ? setStyleFilter()
                                       : setStyleFilter(name)
                                 }
                              />
                           )
                        )}
                     </div>
                     <section id="filter-section5">
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
                                    checked={styleFilter === name}
                                    onChange={() =>
                                       styleFilter === name
                                          ? setStyleFilter()
                                          : setStyleFilter(name)
                                    }
                                 />
                              )
                           )}
                        </div>
                     </section>
                     <section id="filter-section6">
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
                                    checked={styleFilter === name}
                                    onChange={() =>
                                       styleFilter === name
                                          ? setStyleFilter()
                                          : setStyleFilter(name)
                                    }
                                 />
                              )
                           )}
                        </div>
                     </section>
                     <section id="filter-section7">
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
                                    checked={colorFilter === name}
                                    onChange={() =>
                                       colorFilter === name
                                          ? setColorFilter()
                                          : setColorFilter(name)
                                    }
                                 />
                              )
                           )}
                           <img
                              src={MediaAsset}
                              alt="MediaAsset"
                              className="display-absolute bottom-0 end-100 m-0 p-0"
                              style={{ height: "14rem" }}
                           />
                        </div>
                     </section>
                  </section>
               </Container>
            </Form>
            {/* Right Side Panel */}
            <Container id="panel-store" className="w-75 d-flex">
               <section>{/* <h2>Browse Items here</h2> */}</section>
               <Container
                  className="overflow-hidden bg-light"
                  id="container-storeItem"
               >
                  {/* store items are rendered here */}
                  <StoreItem
                     cartItems={cartItems}
                     setCartItems={setCartItems}
                     myFilter={myFilter}
                     className="d-flex flex-wrap justify-content-center"
                  />
                  {/* * */}
               </Container>
            </Container>
         </Container>
      </Container>
   );
}

export default StoreFront;
