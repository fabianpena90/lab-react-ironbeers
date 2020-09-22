import React, { useState, useEffect } from 'react';
import axios from 'axios'

function BeerDetails(props) {
  console.log(props)
  let [selectBeer, setSelectBeer] = useState([]);
  useEffect(() => {
    async function getSelectBeer() {
      let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${props.match.params.id}`
      );
      setSelectBeer(res.data[0]);
      console.log(selectBeer);
    }
    getSelectBeer();
  }, []);

  return <div>
    <img style={{width: '100px'}} src={selectBeer.image_url} alt="beer" />
    <p>{selectBeer.description}</p>
  </div>;
}


export default BeerDetails;