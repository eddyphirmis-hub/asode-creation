import product1 from "../assets/images/produit1.png";
import product2 from "../assets/images/produit5.png";

const products = [
  { id: 1, image: product1, name: "Produit 1" },
  { id: 2, image: product2, name: "Produit 5" },
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