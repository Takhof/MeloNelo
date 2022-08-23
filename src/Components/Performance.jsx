import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Performance() {
  const [data, setData] = useState([]);

  async function fetchData() {
    await fetch("/api/performance")
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  let displayCrowdSource = data.map((event) => {
    return (
      <div className="crowdsource">
        <Link to={"/performance/" + event.id}>
          {`
          ${event.title} 
          by ${event.performer}`}
        </Link>
      </div>
    );
  });

  return (
    <div className="crowdsourceWrapper">
      <h2>Choose your music!</h2>
      <div>{displayCrowdSource}</div>
    </div>
  );
}

export default Performance;
