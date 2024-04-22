import ReactDOM from "react-dom/client";
import "../index.css";
import { SaveImg } from "./SaveImg.jsx";
// import ImgSavedGallery from "./ImgSavedGallery.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <div>
    {/* <App /> */}
    <SaveImg />
    {/* <ImgSavedGallery /> */}
  </div>
);
