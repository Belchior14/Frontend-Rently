import { useContext, useState, useEffect } from "react";
import { client } from "client";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import { AddMoneyOption } from "components/AddMoney";
import { AuthContext } from "context";

export function ProfileShow() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState("null");
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const oneUser = async () => {
    try {
      const response = await client.get(`/profile/${id}`);
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    oneUser();
    getProducts();
  }, [id]);

  return (
    <div>
      <h2>
        {userProfile.firstName} {userProfile.lastName}
        {user._id === userProfile._id ? ` - ${user.money}€` : null}
      </h2>
      <img src={userProfile.image} alt={userProfile.image} />
      {user._id === userProfile._id ? <AddMoneyOption /> : null}
      <h1>Products for rent</h1>
      {products.map((product) => {
        if (userProfile._id === product.user) {
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
      {user && (
        <div>
          <h1>Rented Products</h1>
          {user.rentedProducts.forEach((productRented) => {
            <h3>{productRented.name}</h3>;

            console.log(productRented);
          })}
        </div>
      )}
    </div>
  );
}
