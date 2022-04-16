import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { client } from "client";

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
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <img src={user.image} alt={user.image} />


      {products.map((product) => {
        if (user._id === product.user) {
          return <h3>{product.name}</h3>;
        }
      })}
    </div>
  );
}
