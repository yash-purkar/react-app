import React from "react";
import "./ItemDetails.css";

export const ItemDetails = ({ handleInputValueChange, itemDetails }) => {
  return (
    <form className="item_details_form">
      {/* First row start */}
      <div className="form_row">
        <div className="form_item">
          <label>Item Name</label>
          <input
            id="item_name"
            className="input_field"
            placeholder="Enter item name"
            onChange={handleInputValueChange}
            name="itemName"
            value={itemDetails?.itemName}
          />
          <small className="input_extra_details">Max 50 Characters</small>
        </div>
        <div className="form_item">
          <label>Quantity</label>
          <input
            id="item_qty"
            type="number"
            className="input_field"
            placeholder="Enter quantity"
            name="quantity"
            value={itemDetails?.quantity}
          />
          <small className="input_extra_details">Numeric value</small>
        </div>
      </div>

      {/* Second row start */}
      <div className="form_row">
        <div className="form_item">
          <label>Unit Price</label>
          <input
            id="item_price"
            className="input_field"
            type="number"
            placeholder="Enter unit price"
            name="unitPrice"
            value={itemDetails?.unitPrice}
          />
          <small className="input_extra_details">Numeric value (USD)</small>
        </div>
        <div className="form_item">
          <label>Date of Submission</label>
          <input
            id="item_submissionDate"
            type="date"
            className="input_field"
            placeholder="Select date"
            name="submissionDate"
            value={itemDetails?.submissionDate}
          />
          <small className="input_extra_details">Format: MM/DD/YYYY</small>
        </div>
      </div>
    </form>
  );
};
