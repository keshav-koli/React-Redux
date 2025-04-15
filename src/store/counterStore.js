import { createStore } from "redux";

let initialStore = {
  counter: 0,
  counter2: 0,
};

let counterReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return initialStore;
    default:
      return state;
  }
};
let counter2Reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "INCREMENTCOUNTER1BY1":
      return { ...state, counter: state.counter + 1 };
    case "INCREMENTCOUNTER1BY5":
      return { ...state, counter: state.counter + 5 };
    case "INCREMENTCOUNTER1BY10":
      return { ...state, counter: state.counter + 10 };
    case "DECREMENTCOUNTER1BY1":
      return { ...state, counter: state.counter - 1 };
    case "DECREMENTCOUNTER1BY5":
      return { ...state, counter: state.counter - 5 };
    case "DECREMENTCOUNTER1BY10":
      return { ...state, counter: state.counter - 10 };
    case "INCREMENTCOUNTER2BY1":
      return { ...state, counter2: state.counter2 + 1 };
    case "INCREMENTCOUNTER2BY5":
      return { ...state, counter2: state.counter2 + 5 };
    case "INCREMENTCOUNTER2BY10":
      return { ...state, counter2: state.counter2 + 10 };
    case "DECREMENTCOUNTER2BY1":
      return { ...state, counter2: state.counter2 - 1 };
    case "DECREMENTCOUNTER2BY5":
      return { ...state, counter2: state.counter2 - 5 };
    case "DECREMENTCOUNTER2BY10":
      return { ...state, counter2: state.counter2 - 10 };
    case "RESETCOUNTER1":
      return { ...state, counter: 0 };
    case "RESETCOUNTER2":
      return { ...state, counter2: 0 };
    default:
      return state;
  }
};

let counterStore = createStore(counter2Reducer);
export default counterStore;
// export counter2Store;
// export  counterStore;
