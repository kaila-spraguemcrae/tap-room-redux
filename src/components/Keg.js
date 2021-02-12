import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <>
      <div className="card">
        <h2 className="card-title display-3">{props.name} <span className="text-secondary">{props.brand}</span></h2>
        <p className="display-4">Available Pints: {props.quantity}</p>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number.isRequired
}

export default Keg;