import React from 'react';
import Preview from "./pages/Preview/Preview";
import Room from "./pages/Room/Room";
import {Route} from "react-router-dom"

function App() {
  return (
    <div>
     <Route exact path="/" component={Preview}/>
     <Route exact path="/room/:id" component={Room}/>
    </div>
  );
}

export default App;
