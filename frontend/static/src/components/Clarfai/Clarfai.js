///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "2db209982998400a86c0eb512dd78dc8";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "csweb";
const APP_ID = "apperal";
// Change these to whatever model and image URL you want to use
const MODEL_ID = "apparel-classification-v2";
const MODEL_VERSION_ID = "651c5412d53c408fa3b4fe3dcc060be7";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

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

const requestOptions = {
   method: "POST",
   headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
   },
   body: raw,
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(
   "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs",
   requestOptions
)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.log("error", error));
