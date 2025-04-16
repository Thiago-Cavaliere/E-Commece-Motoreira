import "./NavBar.css";
import BuildIcon from "@mui/icons-material/Build";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar() {
  return (
    <header className="navbar-container">
      <img
        src="./LogoLaranjaLogo.png"
        alt="Logo da Motoreira"
        className="logo"
      />

      <div className="navbar-center">
        <div className="search-section">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
            className="search-input"
          />
          <div className="user-actions">
            <span className="login-link">Entre ou Cadastre-se</span>
            <ShoppingCartIcon className="cart-icon" />
          </div>
        </div>

        <nav className="navBar-options">
          <ul className="nav-options-list">
            <li>
              <a href="#pneus">
                <BuildIcon style={{ marginRight: "6px", fontSize: "20px" }} />
                Acessórios
              </a>
            </li>
            <li>
              <a href="#capacetes">
                <SportsMotorsportsIcon
                  style={{ marginRight: "6px", fontSize: "20px" }}
                />
                Capacetes
              </a>
            </li>
            <li>
              <a href="#contato">
                <MailOutlineIcon
                  style={{ marginRight: "6px", fontSize: "20px" }}
                />
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
