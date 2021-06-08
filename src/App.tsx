import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import {HomeComponent} from "./components/HomeComponent";
import {NavbarComponent} from "./components/NavbarComponent";
import {FooterComponent} from "./components/FooterComponent";
import {PaymentForm} from "./components/PaymentFormComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Switch>
        <Route component={HomeComponent} path="/" exact/>
        <Route component={PaymentForm} path="/payment" exact/>
      </Switch>
      <FooterComponent />
    </>
  );
}

export default App;
