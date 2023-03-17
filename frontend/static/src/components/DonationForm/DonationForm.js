import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/DonationFormStyles.css";
import { IconPhotoPlus } from "@tabler/icons-react";
import { IconShirt } from "@tabler/icons-react";
import Cookies from "js-cookie";
import Resizer from "react-image-file-resizer";
import Badge from "react-bootstrap/Badge";
import { nanoid } from "nanoid";
import { DropdownButton, Dropdown } from "react-bootstrap";

const styleChoices = {
   BL: "Blouses",
   BDS: "Button Down Shirts",
   KT: "Knit Tops",
   TS: "T Shirt",
   TT: "Tank Top",
   SweatS: "Sweat Shirt",
   ST: "Silk Top",
   Sless: "Strapless",
   HT: "Halter Tops",
   Turt: "Turtlenecks",
   BS: "Bodysuits",
   CROP: "Cropped",
};

const colorChoices = {
   Black: "Black",
   Gray: "Gray",
   White: "White",
   Ivory: "Ivory",
   Tan: "Tan",
   Brown: "Brown",
   Purple: "Purple",
   Blue: "Blue",
   Teal: "Teal",
   Green: "Green",
   Red: "Red",
   Pink: "Pink",
   Orange: "Orange",
   Yellow: "Yellow",
};
function DonationForm() {
   const [clothingItem, setClothingItem] = useState({
      title: "",
      category: "",
      style: "",
      brand: "",
      color: "",
      size: "",
      condition: "",
      gender: "",
      selectedTags: null,
      is_active: true,
   });

   // const [image, setImage] = useState(null);
   const [preview, setPreview] = useState("");
   const [setError] = useState(null);
   // const [outputData, setoutputData] = useState([]);
   const [selectedTags, setSelectedTags] = useState([]);

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
      const clothingItemCopy = { ...clothingItem };
      const id = clothingItemCopy.id;
      delete clothingItemCopy.id;

      const options = {
         method: "PUT",
         headers: {
            "X-CSRFToken": Cookies.get("csrftoken"),
            "Content-Type": "application/json",
         },
         body: JSON.stringify(clothingItemCopy),
      };

      const response = await fetch(
         `/api_v1/closet/items/${id}/`,
         options
      ).catch(handleError);

      if (response.ok) {
      }
      if (!response.ok) {
         throw new Error("Network is not ok");
      }
      const data = await response.json();
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

   const handleStyleInput = (event) => {
      const { value } = event.target;

      setClothingItem((prevState) => ({
         ...prevState,
         style: value,
      }));
   };

   const handleColorInput = (event) => {
      const { value } = event.target;

      setClothingItem((prevState) => ({
         ...prevState,
         color: value,
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

   // Resizes the file using react-image-file-resizer
   const resizeImage = (file) =>
      new Promise((resolve) => {
         Resizer.imageFileResizer(
            file,
            400,
            400,
            "JPEG",
            100,
            0,
            (uri) => {
               resolve(uri);
            },
            "file"
         );
      });

   const fetchTags = (url) => {
      // API request works with URL. Currently image input throws an error, possibly because the image isn't Base64. May need to convert image into Base 64

      ///////////////////////////////////////////////////////////////////////////////////////////////////
      // In this section, we set the user authentication, user and app ID, model details, and the URL
      // of the image we want as an input. Change these strings to run your own example.
      //////////////////////////////////////////////////////////////////////////////////////////////////
      // Your PAT (Personal Access Token) can be found in the portal under Authentification
      const PAT = "2db209982998400a86c0eb512dd78dc8";
      // Specify the correct user_id/app_id pairings
      // Since you're making inferences outside your app's scope
      const USER_ID = "csweb";
      const APP_ID = "App-ClarfAI-Apparel-v2";
      // Change these to whatever model and image URL you want to use
      const MODEL_ID = "apparel-classification-v2";
      const MODEL_VERSION_ID = "651c5412d53c408fa3b4fe3dcc060be7";
      // const IMAGE_URL = image;
      // const IMAGE_URL =
      // "https://assets.overland.com/is/image/overlandsheepskin/16144-dbcm-av01895?$";
      const IMAGE_URL = url;
      // console.log(presigned_url);
      // console.log(url.presigned_url);
      ///////////////////////////////////////////////////////////////////////////////////
      // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
      ///////////////////////////////////////////////////////////////////////////////////
      // This section constructs the request body using the parameters defined above

      const raw = JSON.stringify({
         user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID,
         },
         inputs: [
            {
               data: {
                  image: {
                     url: IMAGE_URL,
                  },
               },
            },
         ],
      });

      // This section defines the options for the API request using the request body and headers

      const requestOptions = {
         method: "POST",
         headers: {
            Authorization: `Key ${PAT}`,
            Accept: "application/json",
         },
         body: raw,
      };

      // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
      // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
      // this will default to the latest version_id
      // This section makes the API request to the Clarifai API using fetch()
      // It passes in the options defined above and retrieves the response as JSON
      // The response is then filtered to only include tags with a confidence score above 0.5
      // The resulting tags are stored in outputData state and rendered as a list of buttons using tagsHTML
      fetch(
         "https://api.clarifai.com/v2/models/" +
            MODEL_ID +
            "/versions/" +
            MODEL_VERSION_ID +
            "/outputs",
         requestOptions
      )
         .then((response) => response.json())
         .then((result) => {
            const outputs = result.outputs[0].data.concepts;
            const filteredOutputs = outputs.filter(
               (output) => output.value > 0.5
            );
            const analysisOutput = filteredOutputs.map((output) => ({
               name: output.name,
               score: output.value,
            }));
            setSelectedTags(analysisOutput); // analysisOutput is an array of tags
         })
         .catch((error) => console.log("error", error));
   };

   const handleImageInput = async (event) => {
      const file = event.target.files[0];

      // resize selected image
      const resizedImage = await resizeImage(file);

      // Generate image preview
      const reader = new FileReader();
      reader.onloadend = () => {
         setPreview(reader.result);
      };
      reader.readAsDataURL(resizedImage);

      // Save selected image to the database and return url
      const formData = new FormData();
      formData.append("image", resizedImage);

      const id = clothingItem.id;

      const options = {
         method: id ? "PUT" : "POST",
         headers: {
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: formData,
      };

      const url = id
         ? `/api_v1/closet/images/${id}/`
         : `/api_v1/closet/images/`;

      console.log({ id });

      const response = await fetch(url, options).catch(handleError);

      if (!response.ok) {
         throw new Error("Network is not ok");
      }

      const data = await response.json();

      // // request image tags from the Clarifai API
      const selectedTags = fetchTags(data.presigned_url);
      console.log({ selectedTags });
      setClothingItem({ ...clothingItem, id: data.id, selectedTags });
   };

   const addTag = (tag) => {
      // Check if the tag already exists in the selected tags
      const selectedTagIndex = selectedTags.findIndex(
         (selectedTag) => selectedTag.name === tag.name
      );
      if (selectedTagIndex === -1) {
         // If the tag doesn't exist, add it to the selected tags
         setSelectedTags([...selectedTags, tag]);
      } else {
         // If the tag already exists, remove it from the selected tags
         const updatedSelectedTags = [...selectedTags];
         updatedSelectedTags.splice(selectedTagIndex, 1);
         setSelectedTags(updatedSelectedTags);
      }

      // Convert the selected tags into an array of tag names
      const selectedTagNames = selectedTags.map(
         (selectedTag) => selectedTag.name
      );

      // Update the clothingItem state with the selected tag names
      setClothingItem({
         ...clothingItem,
         selectedTags: selectedTagNames,
      });
   };

   // This section renders the tags stored in outputData state as a list of buttons
   // The nanoid() function is used to generate unique keys for each button
   const tagsHTML = selectedTags.map((tag) => (
      <li id="tag" key={nanoid()}>
         <Button
            variant="outline-primary"
            id="tag-button"
            className={`btn-toggle${
               clothingItem.selectedTags?.includes(tag) ? " active" : ""
            }`}
            onClick={(tag) => addTag(tag)}
         >
            {tag.name}
         </Button>
      </li>
   ));
   console.log(...selectedTags);

   return (
      <div>
         <Container id="container-donation" className="d-flex">
            <Container id="container-donation-image">
               <Form onSubmit={handleSubmit}>
                  <Container id="image-container">
                     {preview && (
                        <img src={preview} alt="" id="donation-image" />
                     )}
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
                        className="form-control w-50 me-2"
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
                        className="w-25 me-2"
                        value={clothingItem.category}
                        onChange={handleCategoryInput}
                     >
                        <option value="" disabled>
                           Category select
                        </option>
                        <option value="Tops">Tops</option>
                        <option value="Bottoms">Bottoms</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Skirts">Skirts</option>
                        <option value="AW">Active Wear</option>
                        <option value="SW">Swim Wear</option>
                        <option value="Shoes">Shoes</option>
                     </Form.Control>
                     <Form.Label htmlFor="style"></Form.Label>
                     <Form.Control
                        as="select"
                        className="w-25"
                        onChange={handleStyleInput}
                     >
                        <option value="">Select Style</option>
                        {Object.entries(styleChoices).map(
                           ([code, name], index) => (
                              <option key={index} value={code}>
                                 {name}
                              </option>
                           )
                        )}
                     </Form.Control>
                  </Form.Group>
                  {/* * */}
                  <Form.Group className="d-flex mt-4">
                     <Form.Label htmlFor="brand"></Form.Label>
                     <input
                        id="text"
                        className="form-control w-50 me-2"
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
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unisex">Unisex</option>
                     </Form.Control>
                     <Form.Control
                        as="select"
                        className="w-25 ms-2"
                        onChange={handleColorInput}
                     >
                        <option value="">Select Color</option>
                        // using Object.entries to iterate through each
                        key-value pair in the styleChoices object
                        {Object.entries(colorChoices).map(
                           ([code, name], index) => (
                              // creates an option element with a unique key and the code as the value
                              <option key={index} value={code}>
                                 {name}
                              </option>
                              // displays the name of the style choice as the text content for the option
                           )
                        )}
                     </Form.Control>
                  </Form.Group>
                  <Form.Group className="d-flex mt-4">
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
                        <option value="New">New</option>
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
                  <Container id="container-recommended-tags" className="w-100">
                     <section id="section-recommended-tags">
                        <h6 className="text-centered">
                           Please Choose Recommended Tags
                        </h6>
                        <section id="recommended-tags">
                           <ul id="tag-list" className="d-flex">
                              {tagsHTML}
                           </ul>
                        </section>
                     </section>
                  </Container>
               </Form>
            </Container>
         </Container>
      </div>
   );
}

export default DonationForm;
