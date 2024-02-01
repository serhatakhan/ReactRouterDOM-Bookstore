import { Link, NavLink } from "react-router-dom";
import { GiEarthWorm } from "react-icons/gi";

const Header = () => {
  return (
    <header className="navbar bg-white shadow p-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-3">
          <Link to="" className="fw-bold">Kitap<GiEarthWorm />Kurdu</Link>
        </span>

        <div className="d-flex gap-3">
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/ürünler">Ürünler</NavLink>
          <NavLink to="/kategori">Kategori</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
