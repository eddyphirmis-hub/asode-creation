function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#accueil">accueil</a>
        <a href="#produits">produits</a>
        <a href="#contacts">contacts</a>
        <a href="#a-propos">à propos</a>
        <a href="#mentions">mentions légales</a>
      </nav>

      <div className="footer-social">
        <a href="#" aria-label="Réseau 1">⬜</a>
        <a href="#" aria-label="X (Twitter)">✕</a>
        <a href="#" aria-label="Réseau 2">⬜</a>
      </div>
    </footer>
  );
}

export default Footer;