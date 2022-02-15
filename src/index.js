import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello() {
  return (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  )
}

ReactDOM.render(
  // <Hello></Hello>,
  <Hello />,
  document.getElementById("root")
)