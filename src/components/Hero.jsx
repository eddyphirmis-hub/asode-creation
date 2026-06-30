import heroModels from "../assets/images/imageproduitaccueil.png";
import heroLogo from "../assets/images/logo2.png";
import heroPoster from "../assets/images/affiche-evenement.png";

function Hero() {
  return (
    <section className="hero">
      <img src={heroModels} alt="Deux modèles portant des t-shirts Asode" className="hero-image" />

      <div className="hero-quote">
        <img src={heroLogo} alt="Logo Asode écureuil" />
        <p>Asode, c'est pas juste une marque. C'est une direction.</p>
      </div>

      <img src={heroPoster} alt="Affiche événement Street Warriors" className="hero-image" />
    </section>
  );
}

export default Hero;