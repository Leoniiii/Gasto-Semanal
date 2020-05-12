import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = (props) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  const [mensaje, guardarMensaje] = useState("");
  

  //Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      guardarMensaje("Presupuesto incorrecto");
      return;
    } else if (nombre === "") {
      guardarMensaje("Ambos campos son obligatorios");
      return;
    } else {
      guardarError(false);
    }
    //Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    //pasar el gasto al componente principal
    props.guardarGasto(gasto);
    props.guardarCrearGasto(true);

    //Resetear el form
    guardarNombre('');
    guardarCantidad(0)
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? <Error mensaje={mensaje} /> : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};
export default Formulario;
