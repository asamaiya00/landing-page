import React from "react";
import Icon from "../assets/neo.svg";
const Header = () => {
  return (
    <header>
      <nav>
        <img width={"40px"} src={Icon} alt="StackOs Icon" />
        <div className="links">
          <a href="#">Nodes</a>
          <a href="#">Team</a>
          <a href="#">Developers</a>
          <a href="#">Token Holders</a>
          <a href="#">Governance</a>
          <a href="#">Cluster Operators</a>
        </div>
        <button href="#" className="deploy-now">
          Deploy Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
