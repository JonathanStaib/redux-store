import { legacy_createStore as createStore, combineReducers, applyMiddleware  } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoryReducer from "./categories/index";
import cartReducer from "./cart";
import productReducer from "./product";
import logger from "./middleware/logger";

let reducers = combineReducers({
  category: categoryReducer,
  cart: cartReducer,
  products: productReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(logger)))
}

export default store();