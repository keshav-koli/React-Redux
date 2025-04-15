import { createStore } from "redux";

let accountDetails = {
  fullName: "",
  balance: null,
  phoneNumber: null,
};

let AccountReducer = (state = accountDetails, action) => {
  switch (action.type) {
    case "updateName":
      return { ...state, fullName: action.payload };
    case "updateBalance":
      return { ...state, balance: action.payload };
    case "updatePhoneNumber":
      return { ...state, phoneNumber: action.payload };
    default:
      return { ...state };
  }
};

let Formstore = createStore(AccountReducer);
export default Formstore;
