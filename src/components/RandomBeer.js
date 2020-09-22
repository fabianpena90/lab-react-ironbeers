import React, { useState, useEffect } from 'react';
import axios from 'axios'

function RandomBeer(props) {
console.log(props);
let [randomBeers, setrandomBeers] = useState([])
  useEffect(() => {
    async function getData() {
      let res = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      console.log(res.data)
      setrandomBeers(res.data)
      }
      getData()
  }, [props])

  return (
    <div>
      <p>{randomBeers.name}</p>
    </div>
  );
}

export default RandomBeer;