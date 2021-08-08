import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
      </Router>
    </Provider>
  );
}
