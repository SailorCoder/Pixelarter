import React, { useContext, useState } from "react";
import "./ColorPicker.css";
import { colors } from "../contexts/PainterContext";
import { PainterContext } from "../contexts/PainterContext";

function ColorPicker() {
  const { setColor } = useContext(PainterContext);
  const colorOption = (color) => {
    return (
      <div
        onClick={() => setColor(color)}
        key={color.name}
        className="color"
        style={{ backgroundColor: color.hex }}
      />
    );
  };

  const colorOptions = () => {
    return colors.map((color) => {
      return colorOption(color);
    });
  };

  return <div className="colorpicker">{colorOptions()}</div>;
}

export default ColorPicker;
