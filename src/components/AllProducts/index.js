import { client } from "client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export function AllProductsShow() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="theProducts">
      <h1>Products</h1>
      <div className="allProfileProducts">
        {products.map((product) => {
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
