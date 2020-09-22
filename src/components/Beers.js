import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Beers(props) {
  // console.log(props)
  let beers = props.beers.map((eachBeer) => {
    return (
       <li key={eachBeer.name}><Link to={`/beers/${eachBeer.name}`}>{eachBeer.name}</Link></li>
    )
  })
  return (
    <div>
      {beers}
    </div>
  );
}

export default Beers;
