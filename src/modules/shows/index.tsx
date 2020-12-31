import React from "react";
import { Route, Switch } from "react-router";
// import { AddEditCharacter } from "./AddEditCharacter";
import { ShowTable } from "./ShowTable";

const ShowRoutes = () => {
  // const match = useRouteMatch();
  //
  return (
    <Switch>
      {/* <Route exact path={`${match.path}/:characterId`} component={AddEditCharacter} /> */}
      <Route path="/" component={ShowTable} />
    </Switch>
  );
};

export default ShowRoutes;
