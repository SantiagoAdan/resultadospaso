import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand"><img src="https://www.electoral.gob.ar/nuevo/img/Logo_cne_350x60px.png" alt="cne" /></a>
        <form className="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar por provincias..."
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
