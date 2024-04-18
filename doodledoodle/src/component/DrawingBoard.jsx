import { useState } from "react";

function DrawingBoard() {
  const [lineWidth, setLineWidth] = useState(5);
  const [color, setColor] = useState("#000000");
  const [isPainting, setIsPainting] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  const handleMouseMove = (event) => {
    if (isPainting && !isFilling) {
      draw(event.offsetX, event.offsetY);
    }
  };

  const startPainting = () => {
    setIsPainting(true);
  };

  const stopPainting = () => {
    setIsPainting(false);
  };

  const draw = (x, y) => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleCanvasClick = () => {
    if (isFilling) {
      fillCanvas();
    }
  };

  const fillCanvas = () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
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

  return (
    <div>
      <canvas
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
        {/* Color options */}
        {/* Assume colorOptions array contains color values */}
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
