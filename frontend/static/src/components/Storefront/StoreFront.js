import "../Styles/StoreFrontStyles.css";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { IconBrandMatrix, IconCheckbox, IconSearch } from "@tabler/icons-react";
import Form from "react-bootstrap/Form";
import StoreItem from "./StoreItem";

function StoreFront() {
   const [isChecked, setIsChecked] = useState({
      male: false,
      female: false,
      unisex: false,
      tops: false,
      bottoms: false,
      dresses: false,
      skirts: false,
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
                  <section id="filter-section1">
                     <h6>Filter item here</h6>
                     <div className="ps-3">
                        <p className="mb-0">Gender:</p>
                        <Form.Check
                           type="checkbox"
                           label="Male"
                           name="male"
                           checked={isChecked.male}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label="Female"
                           name="female"
                           checked={isChecked.female}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label="Unisex"
                           name="unisex"
                           checked={isChecked.unisex}
                           onChange={handleFilterInput}
                        />
                     </div>
                  </section>
                  <section id="filter-section2">
                     <h6>Filter item here</h6>
                     <div className="ps-3">
                        <p className="m-0">Category:</p>
                        <Form.Check
                           type="checkbox"
                           label="Tops"
                           name="tops"
                           checked={isChecked.tops}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label="Bottoms"
                           name="bottoms"
                           check={isChecked.bottoms}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label="Dresses"
                           name="dresses"
                           check={isChecked.dresses}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label="Skirts"
                           name="skirts"
                           check={isChecked.skirts}
                           onChange={handleFilterInput}
                        />
                     </div>
                  </section>
                  <section id="filter-section3">
                     <h6>Filter item here</h6>
                     <div className="ps-3">
                        <p className="m-0">Category:</p>
                        <Form.Check
                           type="checkbox"
                           label=""
                           name=""
                           checked={isChecked.pass}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label=""
                           name=""
                           check={isChecked.pass}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label=""
                           name=""
                           check={isChecked.pass}
                           onChange={handleFilterInput}
                        />
                        <Form.Check
                           type="checkbox"
                           label=""
                           name=""
                           check={isChecked.pass}
                           onChange={handleFilterInput}
                        />
                     </div>
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
