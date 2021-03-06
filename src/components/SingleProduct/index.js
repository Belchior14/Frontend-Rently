import { useState, useEffect, useContext } from "react";
import { client } from "client";
import { Link } from "react-router-dom";
import { RentProductButton } from "components/RentProduct";
import { AuthContext } from "context";
import { UnrentProductButton } from "components/UnrentProduct";
import "./SingleProduct.css";
import { AddCommentsForm } from "components/AddComments";

export function SingleProductShow() {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [userOfTheProduct, setUserOfTheProduct] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [rentedProduct, setRentedProduct] = useState(false);
  const [comments, setComments] = useState([]);
  const [other, setOther] = useState(false);

  const oneUser = async () => {
    try {
      const response = await client.get(`/profile/${user._id}`);
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const oneProduct = async () => {
    try {
      const response = await client.get(
        `/product/${window.location.href.split("/").at(-1)}`
      );
      setProduct(response.data.product);
      setUserOfTheProduct(response.data.rentUser);
      setComments(response.data.product.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    oneProduct();
    oneUser();
  }, [other]);

  return (
    <div className="productContainer">
      {product ? (
        !rentedProduct ? (
          <div>
            <div className="product">
              <div className="productName">
                <h1>{product.name}</h1>
              </div>
              <div className="productDetails">
                <div>
                  <img
                    className="productImage"
                    src={product.image}
                    alt={product.image}
                  />
                </div>
                <div className="theProductDetails">
                  <Link
                    className="h3UserProduct"
                    to={`/profile/${userOfTheProduct._id}`}
                  >
                    <h3>{userOfTheProduct.firstName}</h3>
                  </Link>
                  <h3> {product.price}???</h3>
                  <h3>
                    Location: {product.city}, {product.country}
                  </h3>
                </div>
              </div>
              <div className="productDescription">{product.description}</div>
              {product.rented === false && product.user._id !== user._id && (
                <RentProductButton />
              )}
              {product.rented === true &&
                userProfile.rentedProducts.filter(
                  (theProduct) => theProduct._id === product._id
                ) &&
                userProfile._id !== product.user._id && <UnrentProductButton />}
            </div>
            <div className="comments">
              <div className="addComment">
                <h1> Add a Comment</h1>
              </div>
              <AddCommentsForm setOther={setOther} />
              <div>
                {comments.map((comment) => {
                  return (
                    <div key={comment.id} className="theComments">
                      <Link to={`/profile/${comment.user}`}>
                        <h5>Comment by: {comment.username}</h5>
                      </Link>

                      <p>{comment.title}</p>
                      <p>{comment.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>
              Congrats! You rentered {product.name} from{" "}
              {userOfTheProduct.firstName}
            </p>
          </div>
        )
      ) : null}
    </div>
  );
}
