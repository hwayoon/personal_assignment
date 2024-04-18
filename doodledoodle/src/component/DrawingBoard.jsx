import { useState, useRef } from "react";

function DrawingBoard() {
  const [lineWidth, setLineWidth] = useState(5);
  const [color, setColor] = useState("#000000");
  const [isPainting, setIsPainting] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  // const canvas = document.querySelector("canvas");
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const handleMouseMove = (event) => {
    if (isPainting && !isFilling) {
      draw(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    }
  };

  const startPainting = () => {
    setIsPainting(true);
  };

  const stopPainting = () => {
    setIsPainting(false);
    ctx.beginPath();
  };

  const draw = (x, y) => {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    if (isPainting) {
      ctx.lineTo(x, y);
      ctx.stroke();
      return;
    }
    ctx.moveTo(x, y);
  };

  const handleCanvasClick = () => {
    if (isFilling) {
      fillCanvas();
    }
  };

  const fillCanvas = () => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleLineWidthChange = (event) => {
    setLineWidth(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleColorOptionClick = (colorValue) => {
    setColor(colorValue);
  };

  const handleModeButtonClick = () => {
    setIsFilling((prev) => !prev);
  };

  const colorOptions = [
    "#ff9ff3",
    "#ff9f43",
    "#ff6b6b",
    "#48dbfb",
    "#1dd1a1",
    "#5f27cd",
    "#c8d6e5",
    "#222f3e",
    "#576574",
  ];

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        onClick={handleCanvasClick}
      />
      <input
        type="range"
        min="1"
        max="10"
        value={lineWidth}
        step="0.5"
        onChange={handleLineWidthChange}
      />
      <input type="color" value={color} onChange={handleColorChange} />
      <div>
        {colorOptions.map((colorValue, index) => (
          <div
            key={index}
            className="color-option"
            style={{ backgroundColor: colorValue }}
            onClick={() => handleColorOptionClick(colorValue)}
          ></div>
        ))}
      </div>
      <button onClick={handleModeButtonClick}>
        {isFilling ? "Draw" : "Fill"}
      </button>
    </div>
  );
}

export default DrawingBoard;
