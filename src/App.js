import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Goreng from "./components/Goreng";
import Kuah from "./components/Kuah";
import Meat from "./components/Meat";
import Deskripsi from "./components/Deskripsi";
import Cart from "./components/Cart";

import deskripsi from "./json/deskripsi.json";


class App extends Component {
  render() {
    let detail = key => deskripsi.find(x => x.id === key)

    return (
      <div>
        <div className = "header">
          <Header />
        </div>

        <div className = "content">
          <Route path = "/" render = {() => <Redirect to="/home"/>}/>
          <Route path = "/home" component = {Home}/>
          <Route path = "/login" component = {Login}/>
          <Route path = "/signin" component = {Register}/>
          <Route path = "/cart" component = {Cart}/>
          <Route path = "/miegoreng" component = {Goreng}/>
          <Route path = "/miekuah" component = {Kuah}/>
          <Route path = "/mierealmeat" component = {Meat}/>
          <Route path = "/deskripsi/:id" render = {({match}) => <Deskripsi {...detail(match.params.id)} /> } />
        </div>

        <div className = "footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
