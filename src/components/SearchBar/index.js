import { useState, useEffect } from "react";
import { client } from "client";

export function SearchBarFunction() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [products, setProducts] = useState([])

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => {
        setProducts(response.data.product)
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
      const prodName = product.name.toLowerCase();
      return prodName.includes(query);
    });
  };

  const filteredProducts = filterProducts(products, searchQuery);

  return (
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
     
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.key}>{product.name}</li>
        ))}
      </ul>
    </form>
  );
}
