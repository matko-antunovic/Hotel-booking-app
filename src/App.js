import React from 'react';
import Preview from "./pages/Preview/Preview";
import Room from "./pages/Room/Room";
import {Route,Switch} from "react-router-dom"
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import posed, { PoseGroup } from "react-pose";
import ScrollToTop from "./ScrollToTop"
import "./App.scss"

const RouteContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 300 },
  exit: {
    y:100,
    opacity: 0,
    transition: { duration: 200 }
  }
});


function App() {
  return (
    <ScrollToTop >
    <Route
   
    render={({ location }) => (
      <div id="site-container">
        <div  className="App"  id="content-container">
        <Nav/>
        
        <div className="margin-wrapper">
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} key="home" />
                <Route exact path="/rooms" component={Preview} key="Rooms"/>
                <Route exact path="/rooms/room/:id" component={Room} key="Room" />
              </Switch>
            </RouteContainer>
          </PoseGroup>
          </div>
        </div>
        <Footer/>
      </div>
    )}
/>
</ScrollToTop>
  )
}

export default App;
