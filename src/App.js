import React from 'react';
import Preview from "./pages/Preview/Preview";
import Room from "./pages/Room/Room";
import {Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Nav/>

      
    <div className="margin-wrapper">
     <Route exact path="/" component={Home}/>
     <Route exact path="/rooms" component={Preview}/>
     <Route exact path="/rooms/room/:id" component={Room}/>
    </div>
   <Footer/>
    </div>
  );
}

export default App;
