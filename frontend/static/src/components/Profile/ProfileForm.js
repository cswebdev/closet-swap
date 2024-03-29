import "../Styles/ProfileStyles.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { nanoid } from "nanoid";

const selectState = {
   AL: "Alabama",
   AK: "Alaska",
   AZ: "Arizona",
   AR: "Arkansas",
   CA: "California",
   CO: "Colorado",
   CT: "Connecticut",
   DE: "Delaware",
   FL: "Florida",
   GA: "Georgia",
   HI: "Hawaii",
   ID: "Idaho",
   IL: "Illinois",
   IN: "Indiana",
   IA: "Iowa",
   KS: "Kansas",
   KY: "Kentucky",
   LA: "Louisiana",
   ME: "Maine",
   MD: "Maryland",
   MA: "Massachusetts",
   MI: "Michigan",
   MN: "Minnesota",
   MS: "Mississippi",
   MO: "Missouri",
   MT: "Montana",
   NE: "Nebraska",
   NV: "Nevada",
   NH: "New Hampshire",
   NJ: "New Jersey",
   NM: "New Mexico",
   NY: "New York",
   NC: "North Carolina",
   ND: "North Dakota",
   OH: "Ohio",
   OK: "Oklahoma",
   OR: "Oregon",
   PA: "Pennsylvania",
   RI: "Rhode Island",
   SC: "South Carolina",
   SD: "South Dakota",
   TN: "Tennessee",
   TX: "Texas",
   UT: "Utah",
   VT: "Vermont",
   VA: "Virginia",
   WA: "Washington",
   WV: "West Virginia",
   WI: "Wisconsin",
   WY: "Wyoming",
};

function ProfileForm() {
   const [user, setUser] = useState({
      display_name: "",
      gender: "",
      state: "",
      city: "",
      avatar: "",
   });

   const [activeUser, setActiveUser] = useState({});
   const [userProfile, setUserProfile] = useState({});
   const [userCloset, setUserCloset] = useState([]);
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
         console.log("user profile", data);
         console.log("user profile", user.username);
      };

      getActiveUser();
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
      setUser((prevState) => ({
         ...prevState,
         gender: value,
      }));
   };

   const handleStateInput = (event) => {
      const { value } = event.target;
      setState(value.trim());
      setUser((prevState) => ({
         ...prevState,
         state: value,
      }));
   };

   const handleCityInput = (event) => {
      const { value } = event.target;
      setCity(value.trim());
      setUser((prevState) => ({
         ...prevState,
         city: value,
      }));
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

   const handleInput = (event) => {
      const { name, value } = event.target;

      console.log(`name: ${name}, value: ${value}`);

      setUser((prevState) => ({
         ...prevState,
         [name]: value.trim(),
      }));
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("display_name", displayNames);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("gender", gender);

      const options = {
         method: "PATCH",
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

   const userClosetHTML = userProfile.clothing_items?.map((item) => {
      return (
         <div className="col-4  mt-1 mb-1 d-flex-row flex-wrap" key={nanoid()}>
            <Card className="overflow-hidden">
               <div className="">
                  <Card.Img
                     variant="top"
                     src={item.image}
                     className="CardImg "
                  />
               </div>
            </Card>
         </div>
      );
   });

   return (
      <>
         <Container id="profile-page" className="d-flex">
            <Container id="container-profile" className="pt-2">
               <Form
                  onSubmit={handleSubmit}
                  className="m-0 p-0 g-0"
                  id="profile-form"
               >
                  <Row>
                     <Container
                        id="container-avatar"
                        className="text-center m-0 p-0"
                     >
                        <h1 className="text-center ">
                           {userProfile.display_name}
                        </h1>
                        <Container id="profile-avatar-container">
                           <div id="user-header" className="text-center"></div>
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
                        <Container id="update-userinfo">
                           <h6>Update Information</h6>
                           <Form.Group className="mb-3 d-flex">
                              <Form.Label htmlFor="displayname"></Form.Label>
                              <div className="input-group" id="displayname">
                                 <input
                                    className="form-control me-1"
                                    type="text"
                                    id="displayname"
                                    name="displayname"
                                    placeholder="Display Name"
                                    value={user.display_name}
                                    onChange={handleDisplayNamesInput}
                                 ></input>
                              </div>
                              <Form.Label htmlFor="gender"></Form.Label>
                              <Form.Control
                                 as="select"
                                 className="form-select ms-1"
                                 value={user.gender}
                                 onChange={handleGenderInput}
                                 id="gender-select-box"
                              >
                                 <option value="" disabled>
                                    Select your gender
                                 </option>
                                 <option value="M">Male</option>
                                 <option value="F">Female</option>
                                 <option value="Trans Male">Trans Male</option>
                                 <option value="Trans Female">
                                    Trans Female
                                 </option>
                                 <option value="Non Binary">Non Binary</option>
                                 <option value="Other">Other</option>
                              </Form.Control>
                           </Form.Group>
                           <Container className="d-flex" id="update-location">
                              <Form.Group className="d-flex mt-3 ">
                                 <Form.Label htmlFor="city"></Form.Label>
                                 <div className="input-group" id="city">
                                    <input
                                       className="form-control me-1"
                                       type="text"
                                       id="city-input-box"
                                       name="city"
                                       placeholder="City"
                                       value={user.city}
                                       onChange={handleCityInput}
                                    ></input>
                                 </div>

                                 <Form.Label htmlFor="state"></Form.Label>
                                 <Form.Control
                                    as="select"
                                    className="form-select ms-1"
                                    value={user.state}
                                    onChange={handleStateInput}
                                    id="gender-select-box"
                                 >
                                    {/* <Form.Label htmlFor="state"></Form.Label>
                                 <Form.Control
                                    as="select"
                                    className="form-select ms-1"
                                    name="state"
                                    value={userProfile.state}
                                    onChange={handleStateInput}
                                    id="state-select-box"
                                 > */}
                                    {Object.entries(selectState).map(
                                       ([code, name], index) => (
                                          <option key={index} value={code}>
                                             {name}
                                          </option>
                                       )
                                    )}
                                 </Form.Control>
                              </Form.Group>
                           </Container>
                        </Container>
                        <Button
                           type="submit"
                           className="w-25 "
                           id="update-profile"
                           onClick={handleSubmit}
                        >
                           Save
                        </Button>
                     </Container>
                  </Row>
               </Form>
            </Container>
            <Container id="container-closet" className="d-flex bg-light">
               <div className="text-center mt-1 bg-light">
                  <div className="row bg-light">{userClosetHTML}</div>
               </div>
            </Container>
         </Container>
      </>
   );
}

export default ProfileForm;
