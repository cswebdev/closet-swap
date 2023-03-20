import "../Styles/ProfileStyles.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { IconFlagFilled } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import Cookies from "js-cookie";

function ProfileForm(user) {
   const [activeUser, setActiveUser] = useState({});
   const [userProfile, setUserProfile] = useState({});
   const [userCloset, setUserCloset] = useState({});
   const [avatar, setAvatar] = useState(null);
   const [preview, setPreview] = useState(null);

   useEffect(() => {
      const getActiveUser = async () => {
         const response = await fetch("/dj-rest-auth/user");
         if (!response.ok) {
            throw new Error("Network response not okay - user not found");
         }
         const data = await response.json();
         console.log(data);
         setActiveUser(data);
      };
      getActiveUser();
   }, []);

   useEffect(() => {
      const getUserCloset = async () => {
         const response = await fetch(`/api_v1/closet/items/`);
         if (!response.ok) {
            throw new Error("Network response not okay - user not found");
         }
         console.log("response", response);
         const data = await response.json();
         console.log("closet data:", data);
         setUserCloset(data);
      };
      getUserCloset();
   }, []);

   useEffect(() => {
      const getUserProfile = async () => {
         const response = await fetch(`/api_v1/profiles/`);
         if (!response.ok) {
            throw new Error("Network response not okay - user not found");
         }
         console.log("response", response);
         const data = await response.json();
         console.log("profile data:", data);
         setUserProfile(data);
      };
      getUserProfile();
   }, []);

   // useEffect(() => {
   //    const getUserProfile = async () => {
   //       const response = await fetch(`/api_v1/profiles/${user.id}`);
   //       if (!response.ok) {
   //          throw new Error("Network response not okay - user not found");
   //       }
   //       console.log("response", response);
   //       const data = await response.json();
   //       console.log("profile data:", data);
   //       setUserProfile(data);
   //    };
   //    getUserProfile();
   // }, []);

   const handleImageInput = async (event) => {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
         setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setAvatar(file);
   };

   const handleImageSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("avatar", avatar);
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: JSON.stringify(formData),
      };
      const response = await fetch(`/api_v1/profiles/`, options).catch(
         handleError
      );
      if (!response.ok) {
         throw new Error("Network response not okay - user not found");
      }
      const data = await response.json();
      console.log("profile data:", data);
      setUserProfile(data);
   };

   const handleError = (err) => {
      console.warn.log(err);
   };

   return (
      <Container id="profile-page" className="bg-white">
         <Container id="container-profile" className="d-flex pt-5">
            <Form
               onSubmit={handleImageSubmit}
               className="m-0 p-0 g-0"
               id="profile-form"
            >
               <Container
                  id="container-avatar"
                  className=" text-center  m-0 p-0"
               >
                  <Container id="profile-avatar-container">
                     <div id="user-header" className="d-flex text-center">
                        <h1 className="text-center">{activeUser.username}</h1>
                        <IconFlagFilled id="report" className="ms-1 mt-2" />
                     </div>
                     {preview && (
                        <img src={preview} alt="" id="profile-avatar-image" />
                     )}
                  </Container>
                  <div className="d-flex p-0">
                     <div className="d-flex  m-auto">
                        <Form.Label htmlFor="item_image"></Form.Label>
                        <Form.Control
                           type="file"
                           id="item_image"
                           name="item_image"
                           accept="image/*"
                           className="form-control m-auto"
                           onChange={handleImageInput}
                        ></Form.Control>
                        <Button
                           variant="outline-primary"
                           type="submit"
                           onSubmit={handleImageSubmit}
                        >
                           Save
                        </Button>
                     </div>
                  </div>
               </Container>
            </Form>
            <Container id="container-userinfo" className="bg-info">
               <Row className="text-center">
                  <h1>User Info Goes Here</h1>
               </Row>
               <Row>
                  <Col id="username">Username Box</Col>
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
