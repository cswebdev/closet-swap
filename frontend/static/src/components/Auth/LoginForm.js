import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/LoginStyles.css";
import Cookies from "js-cookie";
import { IconEye } from "@tabler/icons-react";
import MediaAsset from "../../media/HuaJuly_08Transparent.png";

function LoginForm() {
   const [setAuth] = useState(false);
   const navigate = useNavigate();
   const [user, setUser] = useState({
      username: "",
      password: "",
      email: "",
   });
   const [showPassword, setShowPassword] = useState(false);

   const handleInput = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
         ...prevState,
         [name]: value,
      }));
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

   const handleSubmit = async (e) => {
      e.preventDefault();

      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: JSON.stringify({
            username: user.username,
            password: user.password,
         }),
      };

      const response = await fetch("/dj-rest-auth/login/", options).catch(
         handleError
      );
      if (!response.ok) {
         throw new Error("Network Response was not Ok");
      }
      if (response.ok) {
         console.log("Login Successful");
      }
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`); // Added space after "Token"
      // setAuth(true);
      navigate("/profile");
   };

   return (
      <>
         <Container id="container-login">
            <div id="form-styling">
               <h2 className="text-center">Login!</h2>

               <Form onSubmit={handleSubmit}>
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
                     ></input>
                     <Form.Label htmlFor="password"></Form.Label>
                     <div className="input-group">
                        <input
                           className="form-control"
                           type={showPassword ? "text" : "password"}
                           name="password"
                           placeholder="password"
                           value={user.password}
                           onChange={handleInput}
                           id="password"
                        />
                        <span
                           className={`input-group-text ${
                              showPassword ? "show-password" : ""
                           }`}
                           onClick={handleShowPassword}
                        >
                           <IconEye />
                        </span>
                     </div>
                     <Button
                        className="btn btn-primary float-end mt-5"
                        type="submit"
                        id="login-button"
                     >
                        Login
                     </Button>
                  </Form.Group>
               </Form>
            </div>
            <img
               src={MediaAsset}
               alt="logo"
               className="p-0 m-0 g-0 position-absolute bottom-0"
               id="logo"
               style={{ height: "10rem" }}
            />
         </Container>
      </>
   );
}

export default LoginForm;
