import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Pages
import Main from "./Pages/Main";
import CreatePost from "./Pages/CreatePost";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/create-post" component={CreatePost} />
    </BrowserRouter>
  );
}

export default Routes;
