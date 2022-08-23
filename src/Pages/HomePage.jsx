import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="container">
      <h1>Find Your Music</h1>
      <p>
        <Link to="crowdsource">Be a supporter</Link>
      </p>
      <p>
        <Link to="performance">See performance</Link>
      </p>
    </div>
  );
}
