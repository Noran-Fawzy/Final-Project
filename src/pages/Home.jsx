import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="hero-small-text">NEW COLLECTION</p>
              <h1>Discover Our<br />New Collection</h1>
              <p>
                Beautiful furniture for your home.
                Make your space more comfortable
                and stylish.
              </p>

              <Link
                to="/products"
                className="btn shop-btn"
              >
                Shop Now
              </Link>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/hero.png"
                alt="Modern furniture"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      { /* ================= BROWSE ================= */}
      <section className="browse-section">
        <div className="container">
          <div className="section-title">
            <h2>Browse The Range </h2>
            <p>Choose from our beautiful furniture collection </p>
          </div>

          <div className="row g-4">
            <CategoryCard
              image="/images/dining.jpg"
              title="Dining"
            />
            <CategoryCard
              image="/images/living.jpg"
              title="Living"
            />
            <CategoryCard
              image="/images/bedroom.jpg"
              title="Bedroom"
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="products-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Products </h2>
            <p> Explore our latest furniture collection</p>
          </div>

          <div className="row">
            {products
              .slice(0, 8)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </div>

          <div className="text-center mt-4">
            <Link
              to="/products"
              className="btn show-more-btn"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INSPIRATION ================= */}
      <section className="inspiration-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <p className="hero-small-text">INSPIRATION</p>
              <h2>50+ Beautiful Rooms<br />Inspiration </h2>
              <p>
                Discover beautiful room ideas and
                furniture combinations to inspire
                your perfect home.
              </p>

              <Link
                to="/products"
                className="btn shop-btn"
              >
                Explore More
              </Link>
            </div>

            <div className="col-lg-7">
              <img
                src="/images/inspiration.jpg"
                alt="Beautiful room inspiration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-title">
            <p>Share your setup with </p>
            <h2>Furniture Store </h2>
          </div>

          <div className="row g-3">
            <div className="col-md-3">
              <img
                src="/images/gallery1.jpg"
                alt="Modern furniture"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="/images/gallery2.jpg"
                alt="Living room furniture"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="/images/gallery3.jpg"
                alt="Dining room furniture"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="/images/gallery4.jpg"
                alt="Bedroom furniture"
                className="gallery-img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;