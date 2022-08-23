import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CrowdSourceDetail() {
  const [data, setData] = useState([]);
  let params = useParams();

  async function fetchData() {
    await fetch(`/api/crowdsource/${params.id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  let displayCrowdSource = data.map((event) => {
    return (
      <div className="crowdsource">
        <Link to={"/crowdsource/" + event.id}>
          {`
          ${event.title} 
          by ${event.performer}`}
        </Link>
      </div>
    );
  });

  return (
    <div className="crowdsourceWrapper">
      <h2>Details!</h2>
    </div>
  );
}

export default CrowdSourceDetail;
