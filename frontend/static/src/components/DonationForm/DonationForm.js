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

   // const handleImageInput = (event) => {
   //    //files like images are not event.target. They are event.target.files[0]
   //    const file = event.target.files[0];
   //    console.log(file.size);
   //    setClothingItem((prevState) => ({
   //       ...prevState,
   //       image: file,
   //    }));

   //    const reader = new FileReader();
   //    reader.onloadend = () => {
   //       setPreview(reader.result);
   //    };
   //    reader.readAsDataURL(file);
   // };

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

   return (
      <div>
         <Container id="container-donation">
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
