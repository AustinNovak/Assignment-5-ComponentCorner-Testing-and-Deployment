import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      {/* LEFT: LOGO */}
      <div className="header-left">
        <h1>{storeName}</h1>
      </div>

      {/* CENTER: NAV LINKS */}
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* RIGHT: CART ICON */}
      <div className="header-cart">
        <Link to="/cart" className="cart-icon">
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
