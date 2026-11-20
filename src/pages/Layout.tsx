import React from "react";
import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <header>
        <h1>Webáruház</h1>
        <nav>
          <NavLink to="/">Public</NavLink>
          <NavLink to="/kosar">Kosár</NavLink>
          <NavLink to="/ujtermek">Új termék</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
