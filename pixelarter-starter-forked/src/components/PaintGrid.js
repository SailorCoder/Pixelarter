import React, { useContext, useState } from "react";
import "./PaintGrid.css";
import { colors, PainterContext } from "../contexts/PainterContext";

// Datos para pintar la reticula
const cantidadTotalFilas = 15;
const cantidadTotalColumnas = 15;

function construirReticulaInicial() {
  const reticulaInicial = [];
  // puntoH es punto horizontal
  // puntoV es punto verticual
  // un punto es un cuadradito
  for (let puntoH = 0; puntoH < cantidadTotalFilas; puntoH++) {
    // seteamos todas las filas a un array vacío
    reticulaInicial[puntoH] = [];
    for (let puntoV = 0; puntoV < cantidadTotalColumnas; puntoV++) {
      // seteamos todos los cuadrados con el color inicial (blanco)
      reticulaInicial[puntoH][puntoV] = colors[0];
    }
  }
  return reticulaInicial;
}

function PaintGrid() {
  let reticulaInicial = construirReticulaInicial();
  const { color } = useContext(PainterContext);
  const [reticula, setReticula] = useState(reticulaInicial);

  const actualizarReticula = (i, j) => {
    if (reticula[i][j].hex === color.hex) {
      return;
    }
    reticula[i][j] = color;
    setReticula([...reticula]);
  };

  const actualizarReticulaConMouse = (evento, i, j) => {
    if (evento.buttons === 1) {
      actualizarReticula(i, j);
    }
  };

  const resetBtn = () => {
    return (
      <div className="column">
        <button onClick={() => setReticula(reticulaInicial)}>Resetear</button>
      </div>
    );
  };

  const dibujarCelda = (r_i, c_i) => {
    return (
      <td
        key={c_i}
        className="painterBlock"
        onClick={() => actualizarReticula(r_i, c_i)}
        onMouseMove={(e) => actualizarReticulaConMouse(e, r_i, c_i)}
        style={{
          backgroundColor: reticula[r_i][c_i].hex
        }}
      />
    );
  };

  const dibujarFilas = (fila, numeroFila) => {
    return (
      <tr key={numeroFila}>
        {fila.map((col, numeroColumna) => {
          return dibujarCelda(numeroFila, numeroColumna);
        })}
      </tr>
    );
  };

  const dibujarReticula = () => {
    return (
      <div className="column">
        <table>
          <tbody>
            {reticula.map((fila, numeroCelda) => {
              return dibujarFilas(fila, numeroCelda);
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <React.Fragment>
      {dibujarReticula()}
      {resetBtn()}
    </React.Fragment>
  );
}

export default PaintGrid;
