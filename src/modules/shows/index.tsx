import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { AddEditShow } from "./AddEditShow";
import { ShowTable } from "./ShowTable";

const ShowRoutes = () => {
  const match = useRouteMatch();
  //
  return (
    <Switch>
      <Route exact path={`${match.path}/add-edit`} component={AddEditShow} />
      <Route path="/" component={ShowTable} />
    </Switch>
  );
};

export default ShowRoutes;
