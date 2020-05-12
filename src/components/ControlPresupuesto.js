import React, {Fragment} from 'react';

const ControlPresupuesto = (props) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {props.presupuesto}
            </div>
            <div className="alert">
                Restante: {props.restante}
            </div>
        </Fragment>
    )
}
export default ControlPresupuesto;