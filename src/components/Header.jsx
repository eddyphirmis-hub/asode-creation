import logo from "../assets/images/logo2.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Asode" className="header-logo" />

      <nav className="header-nav">
        <button>Accueil</button>
        <button>Produits</button>
        <button>Contacts</button>
        <button>A Propos</button>
      </nav>

      <button className="header-cart" aria-label="Panier">🛒</button>
    </header>
  );
}

export default Header;