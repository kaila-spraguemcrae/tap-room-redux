import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let { stockMessage } = props;
  let numberInput = React.createRef();

  if(keg.quantity === 0) {
    stockMessage = "Currently Out of Stock.";
  } else if (keg.quantity <= 10) {
    stockMessage = "*Low Stock*" + keg.quantity + " pints";
  } else {
    stockMessage = keg.quantity + " pints";
  }

  return (
    <>
      <h1 className="display-3">Product Details</h1>
      <div className="card">
        <div className="card-header">
          <h2>{keg.name}</h2>
        </div>
        <div className="card-body">
          <p>Brand: {keg.brand}</p>
          <p>Alcohol Content: {keg.alcoholContent}</p>
          <p>Price: ${keg.price}</p>
          <p>Flavor: {keg.flavor}</p>
          <p>Description: {keg.description}</p>
        </div>
        <div className="card-footer">
          <p>{stockMessage}</p>
          <button hidden={keg.quantity===0} onClick={()=> onClickingBuy(keg.id)}>Buy</button>
    
            <input ref={numberInput} type='number' name='restock' placeholder='restock quantity'/>
            <button onClick={()=> onClickingRestock(keg.id, numberInput.current.value)}>Restock</button>

          <button onClick={()=> onClickingDelete(keg.id)}>Delete keg</button>
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