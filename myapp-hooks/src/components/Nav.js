import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <head>
        <title>John Doe</title>
        <link
          href="https://fonts.googleapis.com/css?family=Barlow+Condensed|Barlow:600|Rasa:300,500"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./css/style.css" />
      </head>
      <header>
        <ul class="navmenu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Nav;
