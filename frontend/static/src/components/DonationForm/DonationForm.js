import React from "react";
import {
   Form,
   Button,
   Container,
   Dropdown,
   DropdownButton,
   Row,
   Col,
} from "react-bootstrap";
import "./DonationFormStyles.css";
function DonationForm() {
   return (
      <>
         <Container id="form-container">
            <Form>
               <div className="d-flex justify-content-center align-items-center">
                  <Form.Group>
                     <Row>
                        <Col>
                           <DropdownButton
                              id="dropdown-basic-button"
                              title="Category"
                              className=""
                           >
                              <Dropdown.Item href="#/action-1">
                                 Tops
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                 Bottoms
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                 Dresses
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-4">
                                 Skirts
                              </Dropdown.Item>
                           </DropdownButton>
                        </Col>
                        <Col>
                           <DropdownButton
                              id="dropdown-basic-button"
                              title="Category2"
                           >
                              <Dropdown.Item href="#/action-1">
                                 Tops
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                 Bottoms
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                 Dresses
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-4">
                                 Skirts
                              </Dropdown.Item>
                           </DropdownButton>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <DropdownButton
                              id="dropdown-basic-button"
                              title="Category3"
                           >
                              <Dropdown.Item href="#/action-1">
                                 Tops
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                 Bottoms
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                 Dresses
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-4">
                                 Skirts
                              </Dropdown.Item>
                           </DropdownButton>{" "}
                        </Col>
                        <Col>
                           <DropdownButton
                              id="dropdown-basic-button"
                              title="Category4"
                           >
                              <Dropdown.Item href="#/action-1">
                                 Tops
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                 Bottoms
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                 Dresses
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-4">
                                 Skirts
                              </Dropdown.Item>
                           </DropdownButton>
                        </Col>
                     </Row>
                  </Form.Group>
               </div>

               <Form.Group className="col-md-3 mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted"></Form.Text>
               </Form.Group>

               <Form.Group
                  className="col -md-3 mb-3"
                  controlId="formBasicPassword"
               >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
               </Form.Group>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
         </Container>
      </>
   );
}

export default DonationForm;
