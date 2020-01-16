import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarComponent from "./components/navbarcomponent/NavbarComponent";
import Albums from "./pages/Albums/albums";
import Home from "./pages/Home/home";
import Edit from "./pages/Edit/edit";
import NewAlbum from "./pages/NewAlbum/newAlbum";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/albums" component={Albums} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/new-album" component={NewAlbum} />
      </Switch>
    </Router>
  );
}

export default App;
