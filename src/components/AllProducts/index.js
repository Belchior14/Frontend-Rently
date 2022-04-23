import { client } from "client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function AllProductsShow() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => {
        /* console.log(response.data.message) */
        setProducts(response.data.product);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProducts = (products, query) => {
    if (!query) {
      return products;
    }

    return products.filter((product) => {
      const prodName = product.name;
      return prodName.includes(query);
    });
  };

  const filteredProducts = filterProducts(products, searchQuery);

  return (
    <div className="theProducts">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search products</span>
        </label>
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search products"
          name="s"
        />
      </form>

      <h1>Products</h1>
      <div className="allProfileProducts">
        {filteredProducts.map((product) => {
          return (
            <div className="profileProduct">
              <Link
                className="profileProductName"
                to={`/product/${product._id}`}
              >
                <div>
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
    </div>
  );
}
