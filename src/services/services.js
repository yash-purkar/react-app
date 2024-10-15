import axios from "axios";

export const saveItemsSuppliers = async (payload) => {
  try {
    // TODO: Move api url in env file
    const response = await axios.post(
      "https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers",payload
    );
    if (response?.status === 201 || response?.status === 200) {
      // Show success message accordingly
    }
  } catch (error) {
    console.log(error);
  }
};
// https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers
