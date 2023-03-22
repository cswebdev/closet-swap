import "../Styles/ProfileStyles.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { IconFlagFilled } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

function UserProfile() {
   const [user, setUser] = useState({});
   const [activeUser, setActiveUser] = useState({});
   const [userProfile, setUserProfile] = useState({});
   const [userCloset, setUserCloset] = useState([]);
   const [preview, setPreview] = useState(null);
   const [chatId, setChatId] = useState(null);
   const navigate = useNavigate();
   const { userId } = useParams();

   useEffect(() => {
      const getSelectedProfile = async () => {
         const response = await fetch(`/api_v1/profiles/users/${userId}`);
         if (!response.ok) {
            throw new Error("Network response not okay - user not found");
         }
         const data = await response.json();
         setUserProfile(data);
         setUserCloset(data.clothing_items);
         console.log("user profile", data);
      };

      getSelectedProfile();
   }, [setUserProfile, setUserCloset, userId]);

   console.log("user closet", userCloset);

   const userClosetHTML = userProfile.clothing_items?.map((item) => {
      return (
         <div className="col-4 d-flex-row flex-wrap">
            <Card className="">
               <div className="">
                  <Card.Img
                     variant="top"
                     src={item.image}
                     className="CardImg "
                  />
               </div>
               <Card.Body className="d-flex flex-column justify-content-center  m-0 p-0">
                  <Card.Title className="p-1 m-1 text-center">
                     {item.title}
                  </Card.Title>
               </Card.Body>
            </Card>
         </div>
      );
   });

   return (
      <>
         <Container id="profile-page" className="d-flex">
            <Container id="container-profile" className="d-flex pt-5">
               <Form className="m-0 p-0 g-0 " id="profile-form">
                  <Row>
                     <Container
                        id="container-avatar"
                        className="text-center m-0 p-4"
                     >
                        <Container id="profile-avatar-container">
                           <div id="user-header" className="d-flex text-center">
                              <h1 className="text-center">
                                 {userProfile.avatar}
                              </h1>
                              <IconFlagFilled
                                 id="report"
                                 className="ms-1 mt-2"
                              />
                           </div>
                           {preview && (
                              <img
                                 src={preview}
                                 alt=""
                                 id="profile-avatar-image"
                              />
                           )}
                           {!preview && (
                              <img
                                 src={userProfile.avatar}
                                 alt=""
                                 id="profile-avatar-image"
                              />
                           )}
                        </Container>

                        <div className="d-flex p-0"></div>

                        <Container id="container-userinfo">
                           {/* <h1>User Info Goes Here</h1> */}

                           <div>
                              <Col>
                                 <Row id="username">
                                    Username: {userProfile.display_name}
                                 </Row>
                                 <Row>Gender: {userProfile.gender}</Row>
                                 <Row>City: {userProfile.city}</Row>
                                 <Row>State: {userProfile.state}</Row>
                              </Col>
                           </div>
                        </Container>
                        <Container id="container-buttons">
                           <Button
                              id="chat-button"
                              className="m-2"
                              onClick={() => navigate("/chat")}
                           >
                              Chat
                           </Button>
                        </Container>
                     </Container>
                  </Row>
               </Form>
            </Container>
            <Container id="container-closet" className="d-flex">
               <div className="text-center mt-5">
                  <h1>User Clothes</h1>
                  <div className="row">{userClosetHTML}</div>
               </div>
            </Container>
         </Container>
      </>
   );
}

export default UserProfile;
