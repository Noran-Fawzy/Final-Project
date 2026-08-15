import { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Search + Category Filter
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <section className="products-page">
        <div className="container">

          {/* ================= TITLE ================= */}
          <div className="section-title">
            <h1>Our Collection</h1>
            <p> Discover beautiful furniture for your home</p>
          </div>

          {/* ================= SEARCH & FILTER ================= */}
          <div className="row mb-5">

            {/* SEARCH */}
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search furniture..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />
              </div>
            </div>

            {/* CATEGORY */}
            <div className="col-md-4 mt-3 mt-md-0">
              <select
                className="form-select"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >
                <option value="all">All Categories</option>
                <option value="Sofas"> Sofas</option>
                <option value="Chairs"> Chairs</option>
                <option value="Tables"> Tables</option>
                <option value="Beds">Beds</option>
                <option value="Storage">Storage</option>
                <option value="Lighting">Lighting</option>
              </select>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="text-center py-5">
                <i className="bi bi-search fs-1"></i>
                <h4 className="mt-3"> No furniture found</h4>
                <p className="text-muted">
                  Try another search or category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;