import axios from "axios";
import { client } from "client";
import { useState, useEffect } from "react";

export function AllProductsForm() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>
      {products.map((product) => {
          return (
              <div>
<h3>{product.country}</h3>
<h3>{product.city}</h3>
<h3>{product.price}</h3>
<h3>{product.description}</h3>
              </div>
              
          )
      })}
  </div>;
}
