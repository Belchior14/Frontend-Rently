import { useContext, useState, useEffect } from "react";
import { client } from "client";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import { AddMoneyOption } from "components/AddMoney";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";

export function ProfileShow() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState("");
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([])

  const oneUser = async () => {
    try {
      const response = await client.get(`/profile/${id}`);
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try{

      const response = await client.get("/products")
      setProducts(response.data.product)

    } catch(error) {
      console.log(error)
    }


  }
 
  const handleDelete = async (id) => {
    await client.delete(`/product/${id}`);
    oneUser();
  };

  const handleEdit = (id) => {
    navigate(`/product/edit/${id}`);
  };

  useEffect(() => {
    oneUser();
    getProducts()
  }, [{id,products}]);

  return (
    <div>
      <h2>
        {userProfile.firstName} {userProfile.lastName}
        {user._id === userProfile._id ? ` - ${user.money}€` : null}
      </h2>
      <img src={userProfile.image} alt={userProfile.image} />
      {user._id === userProfile._id ? <AddMoneyOption /> : null}
      <h1>Products for rent</h1>
      {userProfile.products?.map((product) => {
        return (
          <div className="profileProduct">
            <Link className="profileProductName" to={`/product/${product._id}`}>
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
            <button onClick={() => handleEdit(product._id)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        );
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
