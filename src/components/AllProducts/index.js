import { client } from "client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";

export function AllProductsShow() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => {
        setProducts(response.data.product);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
    filterProducts();
  }, []);

  const filterProducts = () => {
    let productFilters = products;

    if (searchQuery)
      productFilters = productFilters.filter((product) =>
        product.name.includes(searchQuery)
      );
    if (searchCity)
      productFilters = productFilters.filter((product) =>
        product.city.includes(searchCity)
      );
    return productFilters;
  };

  return (
    <div className="theProducts">
      <div className="searchFeature">
        <div className="wrap">
          <div className="search">
            <form action="/" method="get">
              <label htmlFor="header-search">
                <span className="visually-hidden"></span>
              </label>
              <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                class="searchTerm"
                id="header-search"
                placeholder="Search products"
                name="s"
              />
            </form>

            <form action="/" method="get">
              <label htmlFor="header-search">
                <span className="visually-hidden"></span>
              </label>
              <input
                value={searchCity}
                onInput={(e) => setSearchCity(e.target.value)}
                type="text"
                class="searchTerm"
                id="header-search"
                placeholder="Search cities"
                name="s"
              />
            </form>
          </div>
        </div>
      </div>
      <h1 className="productsTitle">All Products</h1>
      {
        <div className="allProfileProducts">
          {filterProducts().map((product) => {
            return (
              <div className="profileProduct">
                <Link
                  className="profileProductName"
                  to={`/product/${product._id}`}
                >
                  <div className="productProfile">
                    <h3>{product.name}</h3>
                    <img
                      className="productImg"
                      src={product.image}
                      alt={product.image}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}
