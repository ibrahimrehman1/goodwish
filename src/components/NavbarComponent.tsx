import React from "react";
import {NavLink} from "react-router-dom";


export const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "white", textAlign: "center", padding: "1em", boxShadow: "1px 1px 5px 1px #d6d6d6"}}>
      <div className="container-fluid" style={{display: "block"}}>
        <NavLink to="/" className="navbar-brand" href="#" style={{color: "#ffb422", fontSize: "3rem", fontWeight: "bold"}}>
          Goodwish
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
      </div>
    </nav>
  );
};
