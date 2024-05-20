import { app } from "./firebase-config.js";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

const q = query(collection(db, "images"));
const querySnapshot = await getDocs(q);

export function GalleryCard() {
  querySnapshot.forEach((doc) => {
    return <a href={doc.data().image}>click me!</a>;
  });
}

export function Gallery() {
  return (
    <div id="gallery-container">
      <GalleryCard />
    </div>
  );
}
