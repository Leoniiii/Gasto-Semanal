import React from 'react';

const Error = (props) => (
    <p className="alert alert-danger error">{props.mensaje}</p>
);
 
export default Error;