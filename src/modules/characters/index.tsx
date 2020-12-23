import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
// import { AddEditCharacter } from "./AddEditCharacter";
import { CharacterTable } from "./CharacterTable";

const CharactersRoutes = () => {
  // const match = useRouteMatch();
  //
  return (
    <Switch>
      {/* <Route exact path={`${match.path}/:characterId`} component={AddEditCharacter} /> */}
      <Route path="/" component={CharacterTable} />
    </Switch>
  );
};

export default CharactersRoutes;
