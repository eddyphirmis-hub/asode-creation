import logoinsta from "../assets/images/logoinstagram.png";
import logomail from "../assets/images/mail.png";



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
        <a href="https://www.instagram.com/stories/asode_creation/" aria-label="Instagram"><img src={logoinsta} alt="Logo Instagram" className="header-logo" /></a>
        <a href="mailto:eg.waxandco@gmail.com" aria-label="Email"><img src={logomail} alt="Logo Email" className="header-logo" /></a>
        <a href="#" aria-label="Réseau 2">⬜</a>
      </div>
    </footer>
  );
}

export default Footer;