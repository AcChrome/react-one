import React from "react";
import Icon from "./favicon.ico";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={Icon} className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
