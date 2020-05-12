import React from 'react';
import Gasto from './Gasto';

const Listado = (props) => (
    <div className="gastos-realizados">
      <h1>Listado de gastos</h1>
      {props.gastos.map(gasto => (
        <Gasto
          key={gasto.id} 
          gasto={gasto}
        />
      ))}
    </div>    
  );

 
export default Listado;