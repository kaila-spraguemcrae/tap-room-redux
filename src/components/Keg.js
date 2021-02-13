import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <>
      <div className="card mb-3 px-3" id="keg-list-item" onClick= {() => props.whenKegClicked(props.id)}>
        <h2 className="card-title display-3">{props.name} <span className="text-secondary display-4">{props.brand}</span></h2>
        <p className="fs-5">Available Pints: {props.quantity}</p>
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
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;