import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CrowdSourceDetail() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState();
  let params = useParams();

  async function fetchData() {
    await fetch(`/api/crowdsource/${params.id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(setPrice(2000));
  }

  useEffect(() => {
    fetchData();
  }, [data]);

  async function postData() {
    await axios.put(`/api/crowdsource/${params.id}`, {
      price: price,
      id: params.id,
    });
  }

  let displayCrowdSource = data.map((event) => {
    return (
      <div className="crowdsource">
        <h1>{event.title}</h1>
        <h3>¥{event.remaining_goal} left!</h3>
        Support {event.name}!<br></br>
        <button onClick={postData}>Support for {event.supportprice}</button>
        <h4>{event.CSdescription}</h4>
      </div>
    );
  });

  return <div className="crowdsourceWrapper">{displayCrowdSource}</div>;
}

export default CrowdSourceDetail;
