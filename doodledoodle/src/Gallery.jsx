import { app } from "./firebase-config.js";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

const q = query(collection(db, "images"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, ":", doc.data());
});

export function Gallery() {
  return (
    <div id="gallery-container">
      <div className="gallery-image"></div>
    </div>
  );
}
