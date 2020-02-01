import React from "react";
import { Link } from "react-router-dom";

// import { Navigation } from './Navbar';

import "./styles.scss";

function PageNotFound() {
  return (
    <div style={{ height: "100%", width: "auto", color: "black" }}>
      <div className="gradient404"></div>
      {/* <Navigation /> */}
      <div className="content404">
        <p className="FourO" style={{ lineHeight: 1.2 }}>
          40<span className="Four">4</span>
        </p>
        <div className="message404">
          <p className="title">
            Oops! We can't seem to find the page you're looking for.
          </p>
          <p className="subtitle">Here are some things you can try.</p>
        </div>
        <div className="button404">
          <Link to="/">
            <button
              className="btn btn-default redirect"
              style={{ minWidth: "189px" }}
            >
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
