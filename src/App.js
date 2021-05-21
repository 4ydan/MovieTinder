import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import MovieDB from './MovieDB';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/pipi">
            <h1>PUPU</h1>
            <MovieDB />
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
