import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container text-center">
          <p className="about-subtitle">ABOUT US</p>
          <h1>We Create Beautiful<br/>Spaces For You</h1>
          <p className="about-hero-text">
            Discover furniture designed to make your
            home more comfortable, elegant and unique.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="/images/living.jpg"
                  alt="Modern furniture"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <p className="about-subtitle">OUR STORY</p>
              <h2>Furniture That Feels<br /> Like Home</h2>
              <p>
                AtFurniture Store, we believe that furniture is
                more than just something you put in your
                home. It is part of the way you live,
                relax and create memories.
              </p>
              <p>
                Our collection combines modern design,
                comfort and quality to help you create
                a space that truly represents you.
              </p>

              <Link
                to="/products"
                className="btn shop-btn mt-3"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-award"></i>
              <h4>Quality</h4>
              <p>We choose quality products for your home.</p>
            </div>

            <div className="col-md-4 mb-4">
              <i className="bi bi-house-heart"></i>
              <h4> Beautiful Design </h4>
              <p> Modern designs made for beautiful spaces.</p>
            </div>

            <div className="col-md-4 mb-4">
              <i className="bi bi-truck"></i>
              <h4>Fast Delivery</h4>
              <p>We make getting your favorite products simple.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;