import review1 from "../assets/images/produit3.png";
import review2 from "../assets/images/produit4.png";
import avatar from "../assets/images/photocreateur.png";

const reviews = [
  { id: 1, productImage: review1, author: "nyjay_jp", text: "Merci à toi ! 🔥 Il est vraiment top, hyper agréable à porter 💯" },
  { id: 2, productImage: review2, author: "nyjay_jp", text: "Merci à toi ! 🔥 Il est vraiment top, hyper agréable à porter 💯" },
];

function Testimonials() {
  return (
    <section className="testimonials">
      {reviews.map((review) => (
        <div className="review-card" key={review.id}>
          <img src={review.productImage} alt="Produit porté" className="review-product-image" />
          <div className="review-bubble">
            <img src={avatar} alt={review.author} className="review-avatar" />
            <p>
              <strong>{review.author}</strong> {review.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;