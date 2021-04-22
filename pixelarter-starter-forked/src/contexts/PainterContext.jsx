import React, { useState, createContext } from "react";

// definimos los colores
export const colors = [
  { name: "blanco", hex: "#fff" },
  { name: "negro", hex: "#000" },
  { name: "rojo", hex: "#ff0000" },
  { name: "verde", hex: "#00ff00" },
  { name: "azul", hex: "#0000ff" },
  { name: "rosado", hex: "#ffa6c9" },
  { name: "amarillo", hex: "#ffff00" },
  { name: "marron", hex: "#a52a2a" },
  { name: "azul claro", hex: "#add8e6" },
  { name: "purpura", hex: "#9370db" }
];

/**
 * Acá necesitamos hacer un contexto,
 * y poner en un estado la colección de
 * colores. Puedes cambiar los colores a los
 * que quieras, esta lista es opcional.
 *
 * El estado inicial podrá ser el primer item de la colección.
 */

export const PainterContext = createContext();
export const PainterProvider = (props) => {
  const [color, setColor] = useState(colors[0]);
  return (
    <PainterContext.Provider value={{ color, setColor }}>
      {props.children}
    </PainterContext.Provider>
  );
};
