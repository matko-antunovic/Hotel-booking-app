import React from 'react';
import Preview from "./pages/Preview/Preview";
import Room from "./pages/Room/Room";
import {Route} from "react-router-dom"
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
     <Route exact path="/" component={Home}/>
     <Route exact path="/rooms" component={Preview}/>
     <Route exact path="/rooms/room/:id" component={Room}/>
    </div>
  );
}

export default App;
