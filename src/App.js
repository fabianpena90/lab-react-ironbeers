import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import BeerDetails from './components/BeerDetails'

function App() {

  let [beers, setBeers] = useState([])
  useEffect(() => {
    async function getData() {
      let res = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      // console.log(res.data)
      setBeers(res.data)
      }
      getData()
  }, [])


  

  return (
    <div className="App">
      <HomePage />
      

      <Switch>
          <Route exact path="/beers" render={(props) => <Beers beers={beers} {...props} />} ></Route>
          <Route path="/beers/:id" render={(props) => <BeerDetails details={beers} {...props} />} ></Route>
          <Route path="/random" render={(props) => <RandomBeer {...props} />}></Route>
      </Switch>

    </div>
  );
}

export default App;

// 0.name