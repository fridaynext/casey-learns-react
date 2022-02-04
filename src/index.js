import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Luxembourg"
let fancyCity = {
  name: "Luxembourg",
  country: "Somewhere near France"
}
ReactDOM.render(
  <ul>
    <li className="cool-text">Hot Dogs</li>
    <li>Hamburgers</li>
    <li>Pizza</li>
    <li>Chips</li>
    <li id="heading">{city}, {fancyCity.country}</li>
  </ul>,
  document.getElementById("root")
)