import product1 from "../assets/images/produit3.png";
import product3 from "../assets/images/texteremerciement1.png";

const products = [
  { id: 1, image: product1, name: "Produit 3" },
  { id: 3, image: product3, name: "Texte de remerciement 1" },
];

function ProductGallery() {
  return (
    <section className="product-gallery">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <button className="product-link">Voir ce produit</button>
        </div>
      ))}
    </section>
  );
}

export default ProductGallery;