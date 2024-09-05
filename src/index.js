import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      {movieRating ? <p>this movie get {movieRating} star rating</p> : ""}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      message={["terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
