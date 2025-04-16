import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  let dispatch = useDispatch();
  let [formData, setFormData] = useState({
    fullName: "",
    balance: "",
    phoneNumber: "",
  });

  let [name, setName] = useState("");

  const handleName = (e) => {
    setFormData({ ...formData, fullName: e.target.value });
  };
  // console.log(formData);

  const handleUpdateName = (e) => {
    e.preventDefault();
    dispatch({ type: "updateName", payload: formData.fullName });
  };

  let [balance, setBalance] = useState();

  const handleBalance = (e) => {
    setFormData({ ...formData, balance: parseFloat(e.target.value) || 0 });
  };
  let [mobile, setMobile] = useState();

  const handleUpdateMobile = (e) => {
    e.preventDefault();
    dispatch({ type: "updatePhoneNumber", payload: formData.phoneNumber });
  };

  const handleMobile = (e) => {
    setFormData({ ...formData, phoneNumber: parseInt(e.target.value) || 0 });
  };

  const handleUpdateBalanceDeposit = (e) => {
    e.preventDefault();
    dispatch({
      type: "updateBalance",
      payload:
        Storebalance >= 0 || Storebalance == null
          ? Storebalance + formData.balance
          : Storebalance,
    });
  };

  const handleUpdateBalanceWithdraw = (e) => {
    e.preventDefault();
    dispatch({
      type: "updateBalance",
      payload:
        Storebalance - formData.balance > 0
          ? Storebalance - formData.balance
          : Storebalance,
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setFormData({ ...formData, fullName: "", balance: "", phoneNumber: "" });
    dispatch({ type: "RESET" });
  };

  //   ! selector
  let StoreName = useSelector((state) => {
    return state.fullName;
  });
  let Storebalance = useSelector((state) => {

    return state.balance;
  });
  let StorephoneNumber = useSelector((state) => {
    return state.phoneNumber;
  });

  return (
    <div className="border flex justify-center">
      <div>
        <h1 className=" text-2xl ml-16 font-bold">Update Here</h1>
        <form>
          <div className="m-2">
            <input
              value={formData.fullName}
              type="text"
              placeholder="Enter Full Name"
              className="border-b"
              onChange={handleName}
            ></input>
            <button
              className="border bg-green-600 text-white p-2 rounded-2xl ml-4 cursor-pointer"
              onClick={handleUpdateName}
            >
              Update
            </button>
          </div>
          <div className="m-2">
            <input
              value={formData.phoneNumber}
              type="number"
              placeholder="Enter Mobile Number"
              className="border-b"
              onChange={handleMobile}
            ></input>
            <button
              className="border bg-green-600 text-white p-2 rounded-2xl ml-4 cursor-pointer"
              onClick={handleUpdateMobile}
            >
              Update
            </button>
          </div>
          <div className="m-2">
            <input
              value={formData.balance}
              type="number"
              placeholder="Enter Amount"
              className="border-b"
              onChange={handleBalance}
            ></input>
            <button
              className="border bg-green-600 text-white p-2 rounded-2xl ml-4 cursor-pointer"
              onClick={handleUpdateBalanceDeposit}
            >
              Deposit
            </button>
            <button
              className="border bg-red-600 text-white p-2 rounded-2xl ml-4 cursor-pointer"
              onClick={handleUpdateBalanceWithdraw}
            >
              Withdraw
            </button>
          </div>
          <div className="m-2">
            <button
              className="bg-red-600  text-white p-2 rounded-2xl ml-16 cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
        <div>
          <h3 className="font-bold">AccountDetails</h3>
          <table className="table-auto ">
            <thead>
              <tr>
                <th>Account Holder Name</th>
                <th>Mobile Number</th>
                <th>Account Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{StoreName}</td>
                <td>{StorephoneNumber}</td>
                <td>{Storebalance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
