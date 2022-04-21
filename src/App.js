import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Header from './Header';
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";


function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>

      </Router>

      {/* Tinder Card */}



      {/* Buttons below tinder cards */}


      {/* Chats screen */}
      {/* Individual chat screen */}


    </div>
  );
}

export default App;
