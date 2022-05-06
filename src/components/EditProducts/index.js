import { client } from "client";
import { AuthContext } from "context";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./editProduct.css";

export function EditProductForm() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState();
  const [newCategory, setNewCategory] = useState();
  const [newName, setNewName] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newImage, setNewImage] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newCity, setNewCity] = useState();
  const [newCountry, setNewCountry] = useState();

  const oneProduct = async () => {
    try {
      const response = await client.get(
        `/product/${window.location.href.split("/").at(-1)}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const saveProduct = async () => {
    try {
      const response = await client.put(
        `product/edit/${window.location.href.split("/").at(-1)}`,
        {
          category: newCategory,
          name: newName,
          description: newDescription,
          image: newImage,
          price: newPrice,
          city: newCity,
          country: newCountry,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    saveProduct();
    navigate(`/profile/${user._id}`);
  };

  useEffect(() => {
    oneProduct();
  }, []);

  const changeProductContent = () => {
    product && setNewCategory(product.category);
    product && setNewName(product.name);
    product && setNewPrice(product.price);
    product && setNewDescription(product.description);
    product && setNewImage(product.image);
    product && setNewCity(product.city);
    product && setNewCountry(product.country);
  };
  useEffect(() => {
    changeProductContent();
  }, [product]);

  return (
    <div className="editProductsDiv">
      {product && (
        <form onSubmit={handleSave}>
          <div className="addProducth2">
            <h2>Edit product</h2>

            <div className="addProductForm">
              <label>Category:</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              >
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>
                <option option="Home">Home</option>
                <option option="Leisure">Leisure</option>
                <option option="Others">Others</option>
              </select>
              <label>Product Name:</label>
              <input
                type="text"
                id="name"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
              />
              <label>Description:</label>
              <textarea
                type="text"
                id="description"
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}
              />
              <label>Image:</label>
              <input
                type="text"
                id="image"
                value={newImage}
                onChange={(event) => setNewImage(event.target.value)}
              />
              <label>Price:</label>
              <input
                type="number"
                id="price"
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}
              />
              <label>City:</label>
              <input
                type="text"
                id="city"
                value={newCity}
                onChange={(event) => setNewCity(event.target.value)}
              />
              <label>Country:</label>
              <input
                type="text"
                id="country"
                value={newCountry}
                onChange={(event) => setNewCountry(event.target.value)}
              />
              <button className="editProductBTN" type="submit">
                Edit Product
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
