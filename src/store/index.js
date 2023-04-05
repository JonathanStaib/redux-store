import { legacy_createStore as createStore, combineReducers  } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoryReducer from "./categories/index";
import cartReducer from "./cart";

let reducers = combineReducers({
  category: categoryReducer,
  cart: cartReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store();