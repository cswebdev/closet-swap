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

function ProfileForm({ id }) {
   const [user, setUser] = useState({
      display_name: "",
      gender: "",
      state: "",
      city: "",
      avatar: "",
   });

   const [activeUser, setActiveUser] = useState({});
   const [userProfile, setUserProfile] = useState({});
   const [userCloset, setUserCloset] = useState({});
   const [avatar, setAvatar] = useState(null);
   const [preview, setPreview] = useState(null);
   const [displayNames, setDisplayNames] = useState("");
   const [gender, setGender] = useState("");
   const [state, setState] = useState("");
   const [city, setCity] = useState("");

   useEffect(() => {
      const getActiveUser = async () => {
         const response = await fetch(`/api_v1/profiles/current_user/`);
         if (!response.ok) {
            throw new Error("Network response not okay - user not found");
         }
         const data = await response.json();
         setUserProfile(data);
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

   const handleDisplayNamesInput = (event) => {
      const { value } = event.target;
      setDisplayNames(value.trim());

      setUser((prevState) => ({
         ...prevState,
         display_name: value,
      }));
   };

   const handleGenderInput = (event) => {
      const { value } = event.target;
      setGender(value.trim());
   };

   const handleImageInput = async (event) => {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
         setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      console.log("file", file);
      setAvatar(file);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("display_name", displayNames);

      const options = {
         method: "PUT",
         headers: {
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: formData,
      };

      const response = await fetch(
         `/api_v1/profiles/current_user/`,
         options
      ).catch(handleError);

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
               onSubmit={handleSubmit}
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
                     {!preview && (
                        <img
                           src={userProfile.avatar}
                           alt=""
                           id="profile-avatar-image"
                        />
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
                     </div>
                  </div>
               </Container>
               <Button
                  variant="outline-primary"
                  type="submit"
                  onSubmit={handleSubmit}
               >
                  Save
               </Button>
            </Form>
            <Form onSubmit={handleDisplayNamesInput} className="m-0 p-0 g-0">
               <Container id="container-userinfo">
                  <Row className="text-center">
                     {/* <h1>User Info Goes Here</h1> */}
                  </Row>
                  <Row>
                     <Form.Group className="mb-3">
                        <Form.Label htmlFor="displayname"></Form.Label>
                        <div className="input-group" id="displayname">
                           <input
                              className=" form-control"
                              type="text"
                              id="displayname"
                              name="displayname"
                              placeholder="Display Name"
                              value={user.display_name}
                              onChange={handleDisplayNamesInput}
                           ></input>
                        </div>
                     </Form.Group>
                  </Row>
                  <Row className=" bg-info">
                     <Col>
                        <Row id="username">
                           UserName: {userProfile.display_name}
                        </Row>
                        <Row>Gender: {userProfile.gender}</Row>
                        <Row>City: {userProfile.city}</Row>
                        <Row>State: {userProfile.state}</Row>
                     </Col>
                  </Row>
               </Container>
               <Container id="update-userinfo">
                  <Row className="text-center">
                     {/* <h1>Update User Info</h1> */}
                  </Row>
               </Container>
            </Form>
         </Container>
         <Container id="container-closet">
            <Row className="text-center mt-5">
               <h1>User Clothes</h1>
               <Col></Col>
            </Row>
            <Row>
               <Col>{}</Col>
               <Col>item</Col>
               <Col>item</Col>
            </Row>
         </Container>
      </Container>
   );
}

export default ProfileForm;
