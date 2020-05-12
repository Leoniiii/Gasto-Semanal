import React from 'react';

const Gasto = (props) => (
    <li className="gastos">
        <p>{props.gasto.nombre}</p>
        <span className="gasto">${props.gasto.cantidad}</span>
    </li>
)
export default Gasto;