import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase-config.js";

export function SaveToStorage() {
  async function upload() {
    const db = getFirestore(app);
    const canvas = document.querySelector("canvas");
    await addDoc(collection(db, "images"), {
      image: canvas.toDataURL(),
    });
  }
  return <button onClick={upload}>upload</button>;
}
