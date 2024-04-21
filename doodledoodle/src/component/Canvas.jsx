import { useRef, useState, useEffect } from "react";
// import "./Canvas.css";

export function ColorPad() {
  const colorOptions = [
    "#f6b93b",
    "#e55039",
    "#cf6a87",
    "#4a69bd",
    "#60a3bc",
    "#78e08f",
  ];

  return (
    <div id="color-pad">
      {colorOptions.map((color, index) => (
        <div
          key={index}
          className="color"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2;
    contextRef.current = context;

    setCtx(context);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <div className="canvas_wrap">
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      ></canvas>
    </div>
  );
};

export default Canvas;
