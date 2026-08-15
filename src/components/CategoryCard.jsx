import { Link } from "react-router-dom";

function CategoryCard({ image, title, category }) {
  return (
    <div className="col-md-4">
      <Link
        to={`/products?category=${category}`}
        className="category-link"
      >
        <div className="category-card">
          <img
            src={image}
            alt={title}
          />
          <h5>{title}</h5>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;