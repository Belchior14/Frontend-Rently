import { useContext, useState, useEffect } from "react";
import { client } from "client";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import { AddMoneyOption } from "components/AddMoney";
import { AuthContext } from "context";
import userEvent from "@testing-library/user-event";

export function ProfileShow() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState("");
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false);
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

  const handleDelete = () => {
    setProducts((productsForRent) => {
      return productsForRent.filter((product) => {
        return product.id !== id;
      });
    });
  };

  const handleEdit = () => {
    setEdit(true);
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
                <div className="product__actions">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>               
                </div>
              </Link>
            </div>
          );
        }
      })}
      {user._id === userProfile._id ? (
        <div>
          <h1>Rented Products</h1>
          {userProfile.rentedProducts.map((productRented) => {
            return <h3>{productRented.name}</h3>;
          })}
        </div>
      ) : null}
    </div>
  );
}

