import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/RegistrationStyles.css";
import Cookies from "js-cookie";
import { IconEye } from "@tabler/icons-react";

function LoginForm() {
   const [user, setUser] = useState({
      username: "",
      password: "",
      email: "",
   });

   const handleInput = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
         ...prevState,
         [name]: value,
      }));
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

      const response = await fetch("/dj-rest-auth/login", options).catch(
         handleError
      );
      if (!response.ok) {
         throw new Error("Network Response was not Ok");
      }
      const data = await response.json();
      Cookies.set("Authorization", `Token${data.key}`);
   };

   return (
      <Container id="container-login">
         <Form onSubmit={handleSubmit}>
         </Form>
      </Container>
   );
}

export default LoginForm;
