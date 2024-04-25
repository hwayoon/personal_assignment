import { app } from "./firebase-config.js";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

const q = query(collection(db, "images"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  function galleryBox() {
    console.log(doc.id, ":", doc.data().image);
  }
});

export function Gallery() {
  return (
    <div id="gallery-container">
      <div className="gallery-image"></div>
    </div>
  );
}
