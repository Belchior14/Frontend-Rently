import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { client } from "client";
import "./profile.css";
import { Link } from "react-router-dom";
import { AddMoneyOption } from "components/AddMoney";

export function ProfileShow() {
  const [user, setUser] = useState("Hello");
  const [products, setProducts] = useState("hello");

  const oneUser = async () => {
    try {
      const response = await client.get(
       `/profile/${window.location.href.split("/").at(-1)}`
); 
setUser(response.data)
} catch (error) {
      console.log(error)
    }
  };

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
        oneUser();
  }, []);

  return (
    <div className="userInfo">
    <h1>{user.firstName}</h1>     
    {/*  <div>
        <div>
          <h2>
            {user.firstName} {user.lastName} - {user.money}€
          </h2>
          <h3>{user.username}</h3>
          <AddMoneyOption />
        </div>

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
      </div>  */}
    </div>
  );
}
