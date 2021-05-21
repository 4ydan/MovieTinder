import React from 'react';
import Header from './Header';
import Trending from './Trending';
import Discover from './Discover';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/trending">
            <h1 className="text">Trending</h1>
            <Trending />
          </Route>
          <Route path="/">
            <h1 className="text">Discover</h1>
            <Discover />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
