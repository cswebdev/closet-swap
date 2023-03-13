import "../Styles/ProfileStyles.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconFlagFilled } from "@tabler/icons-react";

function ProfileForm() {
   return (
      <Container id="profile-page" className="bg-white">
         <Container id="container-profile" className="d-flex bg-white pt-5">
            <Container id="container-avatar" className="w-25 ">
               <IconFlagFilled className="float-end  me-5" id="report" />

               <div id="section-avatar" className="m-0 p-0">
                  <img src="https://openclipart.org/image/800px/277089" />
               </div>
            </Container>
            <Container id="container-userinfo" className="bg-info">
               <Row className="text-center">
                  <h1>User Info Goes Here</h1>
               </Row>
               <Row>
                  <Col>Username Box</Col>
                  <Col>Test Box</Col>
               </Row>
               <Row>
                  <Col>Test Box</Col>
                  <Col>Test Box</Col>
               </Row>
            </Container>
         </Container>
         <Container id="container-closet">
            <Row className="text-center mt-5">
               <h1>User Clothes</h1>
               <Col></Col>
            </Row>
            <Row>
               <Col>item</Col>
               <Col>item</Col>
               <Col>item</Col>
            </Row>
         </Container>
      </Container>
   );
}

export default ProfileForm;
