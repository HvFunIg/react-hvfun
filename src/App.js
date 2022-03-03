import React from 'react';
import { Route } from "react-router-dom";

import '../src/css/main.css';

import Header from "./components/structural/Header";
import Content from "./components/structural/Content";
import Footer from "./components/structural/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Route path="/" component={Content} exact />
        <Footer/>
    </div>
  );
}

export default App;
