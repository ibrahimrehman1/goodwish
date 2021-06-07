import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import {HomeComponent} from "./components/HomeComponent";
import {NavbarComponent} from "./components/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Switch>
        <Route component={HomeComponent} path="/" exact/>
      </Switch>
    </>
  );
}

export default App;
