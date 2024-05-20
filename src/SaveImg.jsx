export function SaveImg() {
  const handleSaveImage = () => {
    const canvas = document.querySelector("canvas");
    const image = new Image();
    image.src = canvas.toDataURL();
    // const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image.src;
    link.download = "my_drawing.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={handleSaveImage}>Save Image</button>;
}
