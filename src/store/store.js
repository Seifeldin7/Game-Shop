import { createStore } from "redux";
import cartReducers from "./reducers/index";

const initialState = {
  cart: [
    {
      product: {
        id: 1,
        name: "Dark Souls 3",
        price: 100,
        image: "/ds.jpg",
        description:
          "Persin are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook."
      },
      quantity: 5
    }
  ]
};

const store = createStore(
  cartReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
