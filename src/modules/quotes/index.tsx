import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { AddEditQuote } from "./AddEditQuote";
import { AddQuotesFromWikiQuotes } from "./AddQuotesFromWikiQuotes";
import { QuoteTable } from "./QuoteTable";

const QuotesRoutes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}/:quoteId`} component={AddEditQuote} />
      <Route exact path={`${match.path}/add/wiki`} component={AddQuotesFromWikiQuotes} />
      <Route path="/" component={QuoteTable} />
    </Switch>
  );
};

export default QuotesRoutes;
