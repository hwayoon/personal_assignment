import { getStorage, ref } from "firebase/storage";

const canvas = import.meta.env.VITE_CANVAS_ELEMENT;
const image = new Image();
image.src = canvas.toDataURl();

const storage = getStorage();

const fileRef = ref(storage, "gallery.jpg");
const fileImagesRef = ref(storage, "image/gallery.jpg");

fileRef.name === fileImagesRef.name;
fileRef.fullPath === fileImagesRef.fullPath;
