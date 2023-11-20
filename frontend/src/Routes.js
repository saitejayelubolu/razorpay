import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-route-dom";
import App from "./App";
import PaymentStatus from "./comps/PaymentStatus";
const Ruotes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" componet={App} />
        <Route
          exact
          path="/payment/status/:paymentId"
          component={PaymentStatus}
        />
      </Switch>
    </Router>
  );
};

export default Ruotes;
