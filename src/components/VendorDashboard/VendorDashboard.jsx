import React, { useState } from "react";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import "./vendorDashboard.css";
import { SupplierDetails } from "../SupplierDetails/SupplierDetails";
import { saveItemsSuppliers } from "../../services/services";

const VendorDashboard = () => {
  const [selectedValue, setSelectedValue] = useState(["ITEM_DETAILS_FORM"]); // Selected checkbox value to show the form accordingly
  const [itemDetails, setItemDetails] = useState({
    itemDetails: {
      itemName: "",
      quantity: 0,
      unitPrice: 0,
      currency: "",
      submissionDate: "",
    },
  });

  //   To update the selected form
  const handleCheckboxChange = (value) => {
    setSelectedValue((prev) =>
      prev?.includes(value)
        ? prev?.filter((element) => element !== value)
        : [...prev, value]
    );
  };

  // It handles input value change
  const handleInputValueChange = (e) => {
    const { name, value } = e.target;
    setItemDetails((prev) => ({ ...prev, [name]: value }));
  };

  //   It handles save form
  const handleSaveForm = async () => {
    const payload = {
      itemDetails,
    };
    await saveItemsSuppliers(payload);
  };

  return (
    <>
      <div className="form_checkbox">
        <div className="checkbox_field">
          <input
            type="checkbox"
            id="item_details"
            name="form_checkbox_1"
            onChange={() => {
              handleCheckboxChange("ITEM_DETAILS_FORM");
            }}
            checked={selectedValue?.includes("ITEM_DETAILS_FORM")}
          />
          <label htmlFor="item_details">Item</label>
        </div>

        <div className="checkbox_field">
          <input
            type="checkbox"
            id="supplier_details"
            name="form_checkbox_2"
            onChange={() => {
              handleCheckboxChange("SUPPLIER_DETAILS_FORM");
            }}
            checked={selectedValue?.includes("SUPPLIER_DETAILS_FORM")}
          />
          <label htmlFor="supplier_details">Supplier</label>
        </div>
      </div>
      {selectedValue?.includes("ITEM_DETAILS_FORM") && (
        <>
          <h2>Item Details</h2>
          <ItemDetails
            handleInputValueChange={handleInputValueChange}
            itemDetails={itemDetails}
          />
        </>
      )}
      {selectedValue?.includes("SUPPLIER_DETAILS_FORM") && (
        <>
          <h2>Supplier Details</h2>
          <SupplierDetails />
        </>
      )}

      <div className="save_button_container">
        <button className="save_button" onClick={handleSaveForm}>
          Save Changes
        </button>
      </div>
    </>
  );
};

export default VendorDashboard;
