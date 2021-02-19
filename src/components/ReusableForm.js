
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
        <form onSubmit={props.formSubmissionHandler} >
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="name" placeholder="Product Name" defaultValue="test" />
            <label htmlFor="name">Product Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="brand" placeholder="Brand Name" defaultValue="test" />
            <label htmlFor="brand">Brand Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="alcoholContent" placeholder="Alcohol Content" defaultValue="test" />
            <label htmlFor="Alcohol Content">Alcohol Content</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" name="price" placeholder="Price" defaultValue="5" />
            <label htmlFor="price">Price</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="flavor" placeholder="Flavor" defaultValue="test" />
            <label htmlFor="flavor">Flavor</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" name="description" placeholder="Description" defaultValue="test" rows="5" />
            <label htmlFor="description">Description</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number"className="form-control"  name="quantity" placeholder="Quantity in Pints" defaultValue="124" />
            <label htmlFor="quantity">Quantity in Pints</label>
          </div>
          <div className="d-grid pb-2">
            <button type="submit" className="btn btn-secondary">{props.buttonText}</button>
          </div>
        </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;