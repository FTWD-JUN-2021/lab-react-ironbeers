import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import AllBeer from './components/AllBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home />}/>
        <Route exact path="/beers" render={(props) => <AllBeer/>}/>
        <Route exact path="/random-beer" render={(props) => <RandomBeer/>}/>
        <Route exact path="/new-beer" render={(props) => <NewBeer />}/>
      </Switch>
    </div>
  );
}

export default App;
