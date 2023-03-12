import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/DonationFormStyles.css";
import { IconPhotoPlus } from "@tabler/icons-react";
import { IconShirt } from "@tabler/icons-react";
import Cookies from "js-cookie";
import Resizer from "react-image-file-resizer";

function DonationForm() {
   const [clothingItem, setClothingItem] = useState({
      title: "",
      category: "",
      brand: "",
      color: "",
      size: "",
      condition: "",
      gender: "",
      image: null,
   });
   const [preview, setPreview] = useState("");
   const [setError] = useState(null);

   const handleInput = (event) => {
      const { name, value } = event.target;

      console.log(`name: ${name}, value: ${value}`);

      setClothingItem((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();

      for (const property in clothingItem) {
         formData.append(property, clothingItem[property]);
      }

      const options = {
         method: "POST",
         headers: {
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: formData,
      };

      const response = await fetch(`/api_v1/closets/items/`, options).catch(
         handleError
      );

      if (response.ok) {
      }
      if (!response.ok) {
         throw new Error("Network is not ok");
      }
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
      console.log({ data });
   };

   const handleError = (err) => {
      console.warn.log(err);
   };

   const handleCategoryInput = (event) => {
      const { value } = event.target;

      setClothingItem((prevState) => ({
         ...prevState,
         category: value,
      }));
   };

   const handleItemGenderInput = (event) => {
      const { value } = event.target;

      setClothingItem((prevState) => ({
         ...prevState,
         gender: value,
      }));
   };

   const handleSizeInput = (event) => {
      const { value } = event.target;

      setClothingItem((prevState) => ({
         ...prevState,
         size: value,
      }));
   };

   const handleConditionInput = (event) => {
      const { value } = event.target;

      setClothingItem((prevState) => ({
         ...prevState,
         condition: value,
      }));
   };

   const resizeFile = (file) =>
      new Promise((resolve) => {
         Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
               console.log({ size: uri.size });
               resolve(uri);
            },
            "file"
         );
      });

   const handleImageInput = async (event) => {
      try {
         const file = event.target.files[0];
         const image = await resizeFile(file);
         console.log({ image });

         setClothingItem((prevState) => ({
            ...prevState,
            image,
         }));

         const reader = new FileReader();
         reader.onloadend = () => {
            setPreview(reader.result);
         };
         reader.readAsDataURL(image);
      } catch (err) {
         console.log(err);
      }
   };

   // API request works with URL. Currently image input throws an error, possibly because the image isn't Base64. May need to convert image into Base 64

   // ///////////////////////////////////////////////////////////////////////////////////////////////////
   // // In this section, we set the user authentication, user and app ID, model details, and the URL
   // // of the image we want as an input. Change these strings to run your own example.
   // //////////////////////////////////////////////////////////////////////////////////////////////////

   // // Your PAT (Personal Access Token) can be found in the portal under Authentification
   // const PAT = "2db209982998400a86c0eb512dd78dc8";
   // // Specify the correct user_id/app_id pairings
   // // Since you're making inferences outside your app's scope
   // const USER_ID = "csweb";
   // const APP_ID = "App-ClarfAI-Apparel-v2";
   // // Change these to whatever model and image URL you want to use
   // const MODEL_ID = "apparel-classification-v2";
   // const MODEL_VERSION_ID = "651c5412d53c408fa3b4fe3dcc060be7";
   // const IMAGE_URL = clothingItem.image ? clothingItem.image.uri : "";

   // ///////////////////////////////////////////////////////////////////////////////////
   // // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
   // ///////////////////////////////////////////////////////////////////////////////////

   // const raw = JSON.stringify({
   //    user_app_id: {
   //       user_id: USER_ID,
   //       app_id: APP_ID,
   //    },
   //    inputs: [
   //       {
   //          data: {
   //             image: {
   //                url: IMAGE_URL,
   //             },
   //          },
   //       },
   //    ],
   // });

   // const requestOptions = {
   //    method: "POST",
   //    headers: {
   //       Accept: "application/json",
   //       Authorization: "Key " + PAT,
   //    },
   //    body: raw,
   // };

   // // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
   // // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
   // // this will default to the latest version_id

   // fetch(
   //    "https://api.clarifai.com/v2/models/" +
   //       MODEL_ID +
   //       "/versions/" +
   //       MODEL_VERSION_ID +
   //       "/outputs",
   //    requestOptions
   // )
   //    .then((response) => response.text())
   //    .then((result) => console.log(result))
   //    .catch((error) => console.log("error", error));

   return (
      <div>
         <Container id="container-donation" className="d-flex">
            <Container id="container-donation-image">
               <Form onSubmit={handleSubmit}>
                  <Container id="image-container">
                     {clothingItem.image && <img src={preview} alt="" />}
                     {/* <IconShirt className="w-100 h-100 text-muted" /> */}
                  </Container>
                  <div className="d-flex">
                     <Form.Label htmlFor="item_image"></Form.Label>
                     <Form.Control
                        type="file"
                        id="item_image"
                        name="item_image"
                        accept="image/*"
                        className="m-auto w-75"
                        onChange={handleImageInput}
                     ></Form.Control>
                  </div>
               </Form>
            </Container>
            <Container id="container-donation-form">
               <Form onSubmit={handleSubmit} className="p-0">
                  <Form.Group className="d-flex mt-4 ">
                     <Form.Label htmlFor="title"></Form.Label>
                     <input
                        id="text"
                        className="form-control w-75 me-2"
                        name="title"
                        type="text"
                        placeholder="title"
                        value={clothingItem.title}
                        onChange={handleInput}
                     />
                     {/* * */}
                     <Form.Label htmlFor="category"></Form.Label>
                     <Form.Control
                        as="select"
                        className="w-25"
                        value={clothingItem.category}
                        onChange={handleCategoryInput}
                     >
                        <option value="" disabled>
                           category select
                        </option>
                        <option value="TOPS">Tops</option>
                        <option value="BOTTOMS">Bottoms</option>
                        <option value="DRESSES">Dresses</option>
                        <option value="SKIRTS">Skirts</option>
                     </Form.Control>
                  </Form.Group>
                  {/* * */}
                  <Form.Group className="d-flex mt-4">
                     <Form.Label htmlFor="brand"></Form.Label>
                     <input
                        id="text"
                        className="form-control w-75 me-2"
                        name="brand"
                        type="text"
                        placeholder="brand"
                        value={clothingItem.brand}
                        onChange={handleInput}
                     />
                     <Form.Label htmlFor="gender"></Form.Label>
                     <Form.Control
                        as="select"
                        className="w-25"
                        value={clothingItem.gender}
                        onChange={handleItemGenderInput}
                     >
                        <option value="" disabled>
                           Item Gender
                        </option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="U">Unisex</option>
                     </Form.Control>
                  </Form.Group>
                  <Form.Group className="d-flex mt-4">
                     <Form.Label htmlFor="color"></Form.Label>
                     <input
                        className="form-control w-50 me-2"
                        type="text"
                        name="color"
                        placeholder="color"
                        value={clothingItem.color}
                        onChange={handleInput}
                     />

                     <Form.Label htmlFor="size"></Form.Label>
                     <Form.Control
                        as="select"
                        className="w-25"
                        value={clothingItem.size}
                        onChange={handleSizeInput}
                     >
                        <option value="" disabled>
                           Choose Size
                        </option>
                        <option value="XS">Extra Small</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                     </Form.Control>
                     <Form.Label htmlFor="condition"></Form.Label>
                     <Form.Control
                        as="select"
                        className="w-25 ms-2"
                        value={clothingItem.condition}
                        onChange={handleConditionInput}
                     >
                        <option value="" disabled>
                           Condition
                        </option>
                        <option value="N">New</option>
                        <option value="VG">Very Good</option>
                        <option value="G">Good</option>
                        <option value="F">Fair</option>
                        <option value="P">Poor</option>
                     </Form.Control>
                  </Form.Group>
                  <Button
                     type="submit"
                     className="mt-4 float-end"
                     onClick={handleSubmit}
                  >
                     Submit
                  </Button>
               </Form>
            </Container>
         </Container>
      </div>
   );
}

export default DonationForm;
