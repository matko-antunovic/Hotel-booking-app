import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import Preview from "./pages/Preview/Preview";
import {Route} from "react-router-dom"


function App() {
  return (
    <div>
     <Route exact path="/" component={HomePage}/>
     <Route exact path="/preview" component={Preview}/>
     
    </div>
  );
}

export default App;
