import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Beers from './Beers'
import RandomBeer from './RandomBeer'

function HomePage(props) {
  // console.log(props)
  // <Link to={`beers/${props.name}`}
  return (
      <div>
      <nav>
        <ul>
          <li>
            <Link className="links" to="/">Home</Link>
          </li>
          <li>
            <Link className="links" to='/beers'>All Beers</Link>
          </li>
          <li>
            <Link className="links" to="/random">Random Beer</Link>
          </li>
          <li>
            {/* <Link to="/new-beer">New Beer</Link> */}
          </li>
        </ul>
      </nav>

      </div>
  );
}

export default HomePage;