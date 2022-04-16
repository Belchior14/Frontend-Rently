import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import {client} from "client"


export function ProfileShow() {

    const {user} = useContext(AuthContext)

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
            <h2>{user.firstName} {user.lastName}</h2>
            <img src={user.image} alt={user.image} />

            {products.map((product) => {
        return (
            
          <div>
            <h3>{product.country}</h3>
            <h3>{product.city}</h3>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
            {/* <h3 onClick={navigate("/profile/:id")} >{product.user}</h3> */}
          </div>
        );
      })}
            
           
        </div>
    )
}
