import {createStore} from "redux";
import {Provider} from "react-redux";

export const createReduxWrapper = (data) => {
  const store = createStore((state) => state, data);
  return ({children}) => {
    return (
      <>
        <Provider store={store}>
          {children}
        </Provider>
      </>
    );
  };
};
