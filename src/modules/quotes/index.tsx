import React from "react";
import { Route, Switch } from "react-router";
import { QuoteTable } from "./QuoteTable";

const QuotesRoutes = () => (
  <Switch>
    <Route path="/" component={QuoteTable} />
  </Switch>
);

export default QuotesRoutes;
