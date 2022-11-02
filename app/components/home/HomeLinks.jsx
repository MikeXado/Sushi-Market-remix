import { NavLink } from "@remix-run/react";

function HomeLinks() {
  return (
    <div className="home-links">
      <NavLink to="/" className="home-link">
        Новинки
      </NavLink>
      <NavLink to="/popular" className="home-link">
        Популярное
      </NavLink>
    </div>
  );
}

export default HomeLinks;
