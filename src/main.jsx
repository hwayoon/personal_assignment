import ReactDOM from "react-dom/client";
import "../index.css";
import { SaveImg } from "./SaveImg.jsx";
import { SaveToStorage } from "./ImgSaveToGallery.jsx";
import { SignUp } from "./SignUp.jsx";
import { SignIn } from "./SignIn.jsx";
import { Gallery } from "./Gallery.jsx";
// import ImgSavedGallery from "./ImgSaveToGallery.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <div>
    {/* <App /> */}
    <SaveImg />
    {/* <ImgSavedGallery /> */}
    <SaveToStorage />
    <SignUp />
    <SignIn />
    <Gallery />
  </div>
);
