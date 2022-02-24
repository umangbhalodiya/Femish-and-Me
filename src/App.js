import React, { useEffect, useState } from "react";  
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header"; 

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route path="/header" component={Header}/>
    </Router>
  );
}
 
