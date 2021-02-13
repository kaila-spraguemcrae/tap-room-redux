import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let { stockMessage } = props;
  let numberInput = React.createRef();

  if(keg.quantity <= 0) {
    stockMessage = "Currently Out of Stock.";
  } else if (keg.quantity <= 10) {
    stockMessage = "*Low Stock* " + keg.quantity + " pints";
  } else {
    stockMessage = keg.quantity + " pints";
  }

  return (
    <>
      <h1 className="display-3 ps-1">Product Details</h1>
      <div className="card mb-3">
        <div className="card-header">
          <h2>{keg.name}</h2>
        </div>
        <div className="card-body">
          <p>Brand: {keg.brand}</p>
          <p>Alcohol Content: {keg.alcoholContent}</p>
          <p>Price: ${keg.price}</p>
          <p>Flavor: {keg.flavor}</p>
          <p>Description: {keg.description}</p>
          <hr />
          <p><span className="fs-5">Current Stock: </span>{stockMessage}</p>
        </div>
        <div className="card-footer">
          
          <div className="row">
            <button className="btn btn-secondary col m-1" hidden={keg.quantity===0} onClick={()=> onClickingBuy(keg.id)}>Buy</button>

            <input className="col m-1 ms-5" ref={numberInput} type='number' name='restock' placeholder='restock quantity'/>
            <button className="btn btn-secondary m-1 col" onClick={()=> onClickingRestock(keg.id, numberInput.current.value)}>Restock</button>
          </div>

          <div className="row">
            <button className="btn btn-secondary m-1" onClick={()=> onClickingDelete(keg.id)}>Delete Keg</button>
          </div>
        </div>
      </div>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
}

export default KegDetail;