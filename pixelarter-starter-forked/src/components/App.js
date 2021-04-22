import React from "react";
import ColorPicker from "./ColorPicker";
import PaintGrid from "./PaintGrid";
import ColorPreview from "./ColorPreview";
import "./App.css";

function App() {
  return (
    <div>
      <div className="centered">
        <h2>PIXELARTER</h2>
        <ColorPicker />
        <ColorPreview />
        <br />
        <PaintGrid />
      </div>
    </div>
  );
}

export default App;
