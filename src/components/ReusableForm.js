
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Product Name" />
        <input type="text" name="brand" placeholder="Brand Name" />
        <input type="text" name="alcoholContent" placeholder="Alcohol Content" />
        <input type="number" name="price" placeholder="Price" />
        <input type="text" name="flavor" placeholder="Flavor" />
        <textarea name="description" placeholder="Description" />
        <input type="number" name="quantity" placeholder="quantity in pints" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;