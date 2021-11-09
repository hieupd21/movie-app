import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Catalog from "../pages/Catalog";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:cate/:id" exact component={Detail} />
      <Route path="/:cate" component={Catalog} />
    </Switch>
  );
};

export default Routes;
