import { useState, useEffect, useContext } from "react";
import { client } from "client";
import { Link } from "react-router-dom";
import { RentProductButton } from "components/RentProduct";
import { AuthContext } from "context";
import { UnrentProductButton } from "components/UnrentProduct";
import "./SingleProduct.css"

export function SingleProductShow() {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [userOfTheProduct, setUserOfTheProduct] = useState("");
  const [rentedProduct, setRentedProduct] = useState(false)



  const oneProduct = async () => {
    try {
      const response = await client.get(
        `/product/${window.location.href.split("/").at(-1)}`
      );
      setProduct(response.data.product);
      setUserOfTheProduct(response.data.rentUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    oneProduct();
  }, []);

  return (
    <div>
      {product ? (

        !rentedProduct ? (        <div>
          <Link to={`/profile/${userOfTheProduct._id}`}>
            <h1>{userOfTheProduct.firstName}</h1>
          </Link>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
          
          <h3>{product.city}</h3>
          {product.rented === false && product.user !== user._id && (
            <RentProductButton />
          )}
          {product.rented === true && user.rentedProducts.includes(product._id) && (
            <UnrentProductButton />
          )}
          <button onClick={() => setRentedProduct(true)}>display</button>
        </div>) : 
        <div>
          <p>Congrats! You rentered {product.name} from {userOfTheProduct.firstName}</p>

       </div>

        

      ) : null}
     
    </div>
  );
}
