import {createStore} from "redux";

export const createReduxStore = (initialState) => {
  return createStore(
    (state) => state,
    initialState
  );
}
