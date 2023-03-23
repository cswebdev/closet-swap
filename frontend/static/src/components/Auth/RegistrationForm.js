import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/RegistrationStyles.css";
import Cookies from "js-cookie";
import { IconEye } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import EulaAgreement from "../EULA/Eula";

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
      first_name: "",
      last_name: "",
      city: "",
      state: "",
      phone_number: "",
      gender: "",
   });
   const navigate = useNavigate();
   const [setError] = useState(null);
   const [showPassword, setShowPassword] = useState(false);
   const [isAuth, setAuth] = useState(false);


   const handleInput = (event) => {
      const { name, value } = event.target;

      //console.log(`name: ${name}, value: ${value}`);

      setUser((prevState) => ({
         ...prevState,
         [name]: value.trim(),
      }));
      //console.log("name: ", name, "value: ", value);
      //console.log("user: ", user);
   };

   // https://www.w3schools.com/howto/howto_js_toggle_password.asp
   // https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/
   // How to create a show password toggle button
   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

  
   const handleError = (err) => {
      console.warn.log(err);
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
         setAuth(true);
         navigate("/home");
      }

      if (!response.ok) {
         throw new Error("Network is not ok");
      }
      const data = await response.json();
      //console.log("data: ", data);
      Cookies.set("Authorization", `Token ${data.key}`);
      console.log("registration data: ", data);
   };

   return (
      <Container id="container-registration">
         <div id="form-styling">
            <Form onSubmit={handleSubmit} id="form-registration">
               <h2 className="text-center">
                  Dont have an account? Sign up here!
               </h2>

               <Form.Group className="w-50 m-auto">
                  <Form.Group className="d-flex mt-4 m-auto">
                     <Form.Label htmlFor="username"></Form.Label>
                     <input
                        id="text"
                        className="form-control me-1"
                        name="username"
                        type="text"
                        placeholder="username"
                        value={user.username}
                        onChange={handleInput}
                     />

                     <Form.Label htmlFor="email"></Form.Label>
                     <input
                        type="email"
                        className="form-control ms-1"
                        placeholder="email"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                     />
                  </Form.Group>
                  <Form.Group className="d-flex mt-4 m-auto">
                     <Form.Label htmlFor="password1"></Form.Label>
                     <div className="input-group">
                        <input
                           className="form-control me-1"
                           type={showPassword ? "text" : "password"}
                           name="password1"
                           placeholder="password"
                           value={user.password1}
                           onChange={handleInput}
                           id="input-password"
                        />
                     </div>

                     <Form.Label htmlFor="password2"></Form.Label>
                     <div className="input-group">
                        <input
                           className="form-control ms-1"
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
                     <input
                        type="tel"
                        className="form-control me-1"
                        placeholder="+1 phone number"
                        name="phone_number"
                        value={user.phone_number}
                        onChange={handleInput}
                        id="phone-number"
                     />

                     <Form.Label htmlFor="gender"></Form.Label>
                     <Form.Control
                        as="select"
                        className="ms-1"
                        name="gender"
                        value={user.gender}
                        // onChange={handleGenderInput}
                        onChange={handleInput}
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
                     <Form.Label htmlFor="city"></Form.Label>
                     <div className="input-group">
                        <input
                           type="text"
                           className="form-control me-1"
                           placeholder="city"
                           name="city"
                           value={user.city}
                           onChange={handleInput}
                        />
                     </div>

                     <Form.Label htmlFor="state"></Form.Label>
                     <Form.Control
                        as="select"
                        type="select"
                        name="state"
                        className="form-control ms-1"
                        value={user.state}
                        //  onChange={handleStateInput}
                        onChange={handleInput}
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
                  <section
                     className="overflow-auto"
                     id="eula-agreement-section"
                  >
                     <EulaAgreement />
                  </section>

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
