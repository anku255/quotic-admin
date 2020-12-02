import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin";
import Auth from "layouts/Auth";

// views without layouts

import Landing from "views/Landing";
import Profile from "views/Profile";
import Index from "views/Index";
import Quotes from "modules/quotes";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        {/* <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} /> */}
        {/* add routes without layouts */}
        {/* <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} /> */}
        <Route path="/quotes" exact component={Quotes} />

        <Route path="/" exact component={Quotes} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
