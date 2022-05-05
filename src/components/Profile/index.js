import { useContext, useState, useEffect } from "react";
import { client } from "client";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import { AddMoneyOption } from "components/AddMoney";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";
import { EditProfile } from "components";

export function ProfileShow() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState("");
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [test , setTest] = useState(false)
  

  const oneUser = async () => {
    try {
      const response = await client.get(`/profile/${id}`);
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await client.get("/products");
      setProducts(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await client.delete(`/product/${id}`);
    oneUser();
  };

  const handleEdit = (id) => {
    navigate(`/product/edit/${id}`);
  };

  useEffect(() => {
    oneUser();
  }, [test]);

  return (
    <div className="userProfile">
      {console.log(userProfile)}
      <div className="userInfo">
      <h2>
        {userProfile.firstName} {userProfile.lastName}
        {user._id === userProfile._id ? ` - ${userProfile.money}€` : null}
      </h2>
      <img
        className="userProfileImage"
        src={userProfile.image}
        alt={userProfile.image}
      />
      <EditProfile setTest={setTest} />
      <div>
      {user._id === userProfile._id ? <AddMoneyOption /> : null}
      </div>

      </div>

      <h1>Products for rent</h1>
      <div className="userProducts">
        {userProfile.products?.map((product) => {
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
                <div className="product__actions"></div>
              </Link>
              {user._id === userProfile._id ? (
                <div>
                  <button onClick={() => handleEdit(product._id)}>Edit</button>
                  <button onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div>
        <h1>Rented Products</h1>
        <div className="userRentedProducts">
          {user._id === userProfile._id ? (
            <div>
              {userProfile.rentedProducts.map((productRented) => {
                return (
                  <div className="profileProduct">
                    <Link
                      className="profileProductName"
                      to={`/product/${productRented._id}`}
                    >
                      <div>
                        <h3>{productRented.name}</h3>
                        <img
                          className="productImg"
                          src={productRented.image}
                          alt={productRented.image}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>  
      </div>
    </div>
  );
}
