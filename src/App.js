import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./ServiceProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will run only once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);

      if (authUser) {
        //the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
