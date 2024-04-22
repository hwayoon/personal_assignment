import { storage, ref } from "./firebase-config.js";

export function SaveToStorage() {
  const canvas = document.querySelector("canvas");

  // canvas에서 이미지 데이터 URL 가져오기
  const imageDataURL = canvas.toDataURL();

  // Firebase Storage에 이미지 업로드
  const storageRef = ref(storage);

  // child 메소드도 더 이상 사용하지 않는 것 같다. 어떻게 작성해야하지..
  const imageRef = storageRef.child("images/image.png"); // 저장할 이미지 경로 및 파일명
  imageRef
    .putString(imageDataURL, "data_url")
    .then((snapshot) => {
      console.log("Uploaded a data URL!", snapshot);
    })
    .catch((error) => {
      console.error("Error uploading data URL:", error);
    });

  return <div>save to gallery</div>;
}
