import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import Preview from "./pages/Preview/Preview";
import {Route} from "react-router-dom"
import Zaredux from './pages/zaredux/zaredux';

function App() {
  return (
    <div>
     <Route exact path="/" component={HomePage}/>
     <Route exact path="/preview" component={Preview}/>
     <Route exact path="/red" component={Zaredux}/>
    </div>
  );
}

export default App;
