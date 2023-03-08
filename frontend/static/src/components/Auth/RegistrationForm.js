import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/RegistrationStyles.css";
import Cookies from "js-cookie";

function Registration({ setAuth, useState }) {
   const [user, setUser] = useState({
      username: "",
      password1: "",
      password2: "",
      email: "",
      phone: [],
      gender: [],
   });

   const [err, setError] = useState(null);

   const handleInput = (event) => {
      const { name, value } = event.target;

      setUser((prevState) => ({
         ...prevState,
         [name]: value.trim(),
      }));
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
      }

      if (!response.ok) {
         throw new Error(
            "Network is im not okay im not okayyyyy you wear me out"
         );
      }
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
      setAuth(true);
   };

   return (
      <Container id="container-registration">
         <Form onSubmit={handleSubmit}>
            <Form.Group
               controlId="formBasicRegistration"
               className="w-75 m-auto"
            >
               <Form.Label htmlFor="username"></Form.Label>
               <Form.Control type="text" placeholder="username" />
               <Form.Label htmlFor="email"></Form.Label>
               <Form.Control type="email" placeholder="email" />
               <Form.Label htmlFor="phone"></Form.Label>
               <Form.Control type="phone" placeholder="phone number" />
               <Form.Group className="d-flex mt-4 m-auto">
                  <Form.Label htmlFor="password1"></Form.Label>
                  <Form.Control
                     className="me-3"
                     type="password1"
                     placeholder="password"
                  />
                  <Form.Label htmlFor="password2"></Form.Label>
                  <Form.Control
                     className="ms-3"
                     type="password2"
                     placeholder="re-enter password"
                  />
               </Form.Group>
               <Form.Group controlId="gender" className="mt-4 w-25 float-end">
                  <Form.Label>
                     <h6>What is your gender identity?</h6>
                  </Form.Label>
                  <Form.Control
                     as="select"
                     defaultValue=""
                     className="float-end"
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
                     <option value="GQ">Gender Queer</option>
                     <option value="IS">Intersex</option>
                  </Form.Control>
                  <Button
                     className="btn btn-primary float-end mt-5"
                     type="submit"
                     variant="primary"
                     // onClick={() => {handleSubmit}}
                  >
                     Submit
                  </Button>
               </Form.Group>
            </Form.Group>
         </Form>
      </Container>
   );
}
export default Registration;
