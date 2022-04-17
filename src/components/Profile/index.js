import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { client } from "client";
import "./profile.css";
import { Link } from "react-router-dom";

export function ProfileShow() {
  const { user } = useContext(AuthContext);

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

  return (
    <div className="userInfo">
      <div>
        <h2>
          {user.firstName} {user.lastName} - {user.money}€
        </h2>
        <h3>{user.username}</h3>
        <img className="profileImg" src={user.image} alt={user.image} />
      </div>

      <div className="theProducts">
        <h1>Products</h1>
        <div className="allProfileProducts">
          {products.map((product) => {
            if (user._id === product.user) {
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
            }
          })}
        </div>
      </div>
    </div>
  );
}
