import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let dispatch = useDispatch();
  let StoreName = useSelector((state) => {
    return state.fullName;
  });
  let Storebalance = useSelector((state) => {
    return state.balance;
  });
  let StorephoneNumber = useSelector((state) => {
    return state.phoneNumber;
  });
  /* let counterValue = useSelector((state) => {
    console.log("I am useSelector() Hook");
    return state.counter;
  });
  console.log(counterValue);

  let counter2Value = useSelector((state) => {
    console.log("I am useSelector() Hook");
    return state.counter2;
  });
  console.log(counter2Value);
  return (
    <>
      <h1>React Redux</h1>
      <p>Official React binding for Redux</p>
      <h2>Counter : {counterValue}</h2>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER1BY1" })}>Increment by 1</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER1BY5" })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER1BY10" })}>Increment by 10</button>
      <button onClick={() => dispatch({ type: "RESETCOUNTER1" })}>RESET</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER1BY1" })}>Decrement by 1</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER1BY5" })}>Decrement by 5</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER1BY10" })}>Decrement by 10</button>

      <h2>Counter 2 :{counter2Value}</h2>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER2BY1" })}>Increment by 1</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER2BY5" })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER2BY10" })}>Increment by 10</button>
      <button onClick={() => dispatch({ type: "RESETCOUNTER2" })}>RESET</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER2BY1" })}>Decrement by 1</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER2BY5" })}>Decrement by 5</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER2BY10" })}>Decrement by 10</button>
      </>
    );
    */
  return (
    <div className="border flex justify-center">
      <div>
        <h1 className=" text-2xl ml-16 font-bold">Update Here</h1>
        <form>
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter Full Name"
            className="border-b"
          ></input>
          <button className="border bg-green-600 text-white p-2 rounded-2xl ml-4">
            Update
          </button>
        </div>
        <div className="m-2">
          <input
            type="number"
            placeholder="Enter Mobile Number"
            className="border-b"
          ></input>
          <button className="border bg-green-600 text-white p-2 rounded-2xl ml-4">
            Update
          </button>
        </div>
        <div className="m-2">
          <input
            type="number"
            placeholder="Enter Amount"
            className="border-b"
          ></input>
          <button className="border bg-green-600 text-white p-2 rounded-2xl ml-4">
            Deposit
          </button>
          <button className="border bg-red-600 text-white p-2 rounded-2xl ml-4">
            Withdraw
          </button>
        </div>
        <div className="m-2">
          <button className="bg-red-600  text-white p-2 rounded-2xl ml-16">
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

export default App;
