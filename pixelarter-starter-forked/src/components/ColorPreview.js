import React, { useContext, useState } from "react";
import { PainterContext } from "./../contexts/PainterContext";

// En este archivo necesitamos leer del contexto el nombre
// del color seleccionado, y mostrarlo al lado del texto
function ColorPreview() {
  const { colors } = useContext(PainterContext);
  const { color } = useContext(PainterContext);
  return (
    <div className="colorPreview">El color seleccionado es: {color.name} </div>
  );
}

export default ColorPreview;
