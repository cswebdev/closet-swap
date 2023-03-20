import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/RegistrationStyles.css";
import Cookies from "js-cookie";
import { IconEye } from "@tabler/icons-react";
import { Navigate } from "react-router-dom";

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

function RegistrationForm() {
   const [user, setUser] = useState({
      username: "",
      password1: "",
      password2: "",
      email: "",
      gender: "",
      phone_number: "",
      city: "",
      state: "",
   });

   const [setError] = useState(null);
   const [showPassword, setShowPassword] = useState(false);
   const [setAuth] = useState(false);

   const handleInput = (event) => {
      const { name, value } = event.target;

      console.log(`name: ${name}, value: ${value}`);

      setUser((prevState) => ({
         ...prevState,
         [name]: value.trim(),
      }));
   };

   // https://www.w3schools.com/howto/howto_js_toggle_password.asp
   // https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/
   // How to create a show password toggle button
   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const handleGenderInput = (event) => {
      const { value } = event.target;

      setUser((prevState) => ({
         ...prevState,
         gender: value.trim(),
      }));
   };
   const handleError = (err) => {
      console.warn.log(err);
   };

   const handleStateInput = (event) => {
      const { value } = event.target;

      setUser((prevState) => ({
         ...prevState,
         state: value.trim(),
      }));
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: JSON.stringify(user),
      };

      if (user.password1 !== user.password2) {
         setError("passwords do not match");
         return;
      }

      const response = await fetch(
         "/dj-rest-auth/registration/",
         options
      ).catch(handleError);

      if (response.ok) {
      }

      if (!response.ok) {
         throw new Error("Network is not ok");
      }
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
      setAuth(true);
      Navigate("/");
   };

   return (
      <Container id="container-registration">
         <div id="form-styling">
            <h2 className="text-center">Dont have an account? Sign up here!</h2>

            <Form onSubmit={handleSubmit} id="form-registration">
               <Form.Group className="w-50 m-auto">
                  <Form.Label htmlFor="username"></Form.Label>
                  <input
                     id="text"
                     className="form-control"
                     name="username"
                     type="text"
                     placeholder="username"
                     value={user.username}
                     onChange={handleInput}
                  />

                  <Form.Label htmlFor="email"></Form.Label>
                  <input
                     type="email"
                     className="form-control"
                     placeholder="email"
                     name="email"
                     value={user.email}
                     onChange={handleInput}
                  />

                  {/* <Form.Label htmlFor="phone"></Form.Label>
               <Form.Control type="phone" placeholder="phone number" /> */}

                  <Form.Group className="d-flex mt-4 m-auto">
                     <Form.Label htmlFor="password1"></Form.Label>
                     <div className="input-group">
                        <input
                           className=" form-control me-2"
                           type={showPassword ? "text" : "password"}
                           name="password1"
                           placeholder="password"
                           value={user.password1}
                           onChange={handleInput}
                        />
                     </div>

                     <Form.Label htmlFor="password2"></Form.Label>
                     <div className="input-group">
                        <input
                           className="form-control"
                           type={showPassword ? "text" : "password"}
                           name="password2"
                           placeholder="password"
                           value={user.password2}
                           onChange={handleInput}
                           id="input-password"
                        />
                        <span
                           className={`input-group-text ${
                              showPassword ? "show-password" : ""
                           }`}
                           onClick={handleShowPassword}
                           id="show-password"
                        >
                           <IconEye />
                        </span>
                     </div>
                  </Form.Group>

                  <Form.Group className="d-flex mt-4 m-auto">
                     <Form.Label htmlFor="phone_number"></Form.Label>
                     <div className="input-group">
                        <input
                           type="form-control"
                           className="form-control "
                           placeholder="phone number"
                           name="phone_number"
                           value={user.phone_number}
                           onChange={handleInput}
                        />
                     </div>

                     <Form.Label htmlFor="gender"></Form.Label>
                     <Form.Control
                        as="select"
                        className="form-select"
                        value={user.gender}
                        onChange={handleGenderInput}
                        id="gender-select-box"
                     >
                        <option value="" disabled>
                           Select your gender
                        </option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="TM">Trans Male</option>
                        <option value="TF">Trans Female</option>
                        <option value="NB">Non Binary</option>
                        <option value="GNC">Gender Non Conforming</option>
                        <option value="GF">Gender Fluid</option>
                        <option value="IS">Intersex</option>
                     </Form.Control>
                  </Form.Group>
                  <Form.Group className="d-flex mt-4 m-auto">
                     <Form.Label htmlFor="city">
                        <div className="input-group">
                           <input
                              type="form-control"
                              className="form-control "
                              placeholder="city"
                              name="city"
                              value={user.city}
                              onChange={handleInput}
                           />
                        </div>
                     </Form.Label>
                     <Form.Label htmlFor="state"></Form.Label>
                     <Form.Control
                        as="select"
                        className="form-select"
                        value={user.state}
                        onChange={handleStateInput}
                        id="state-select-box"
                     >
                        {Object.entries(selectState).map(
                           ([code, name], index) => (
                              <option key={index} value={code}>
                                 {name}
                              </option>
                           )
                        )}
                     </Form.Control>
                  </Form.Group>
                  <Button
                     className="btn btn-primary float-end mt-5"
                     type="submit"
                     id="register-button"
                  >
                     Submit
                  </Button>
               </Form.Group>
            </Form>
         </div>
      </Container>
   );
}
export default RegistrationForm;
