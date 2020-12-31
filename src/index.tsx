import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

// import Admin from "layouts/Admin";
// import Auth from "layouts/Auth";

// views without layouts

// import Landing from "views/Landing";
// import Profile from "views/Profile";
// import Index from "views/Index";
import Quotes from "modules/quotes";
import Characters from "modules/characters";
import Shows from "modules/shows";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
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
        <Redirect exact from="/" to="/quotes" />
        <Route path="/quotes" component={Quotes} />
        <Route path="/characters" component={Characters} />
        <Route path="/shows" component={Shows} />

        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
