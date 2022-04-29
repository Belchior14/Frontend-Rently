import { useContext, useState } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context";
import { FileUpload } from "components/FileUpload";
import "./addProducts.css";

export function AddProductsForm() {
  const [category, setCategory] = useState("Others");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const addProducts = async (
    category,
    name,
    description,
    image,
    price,
    city,
    country
  ) => {
    try {
      const response = await client.post("product/add", {
        category,
        name,
        description,
        image,
        price,
        city,
        country,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProducts(category, name, description, image, price, city, country);
    setName("");
    setCategory("");
    setDescription("");
    setImage("");
    setPrice("");
    setCity("");
    setCountry("");
    navigate(`/profile/${user._id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="addProductForm">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Description:</label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label>Image:</label>
        <FileUpload setImage={setImage} />
        <label>Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label>City:</label>

        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <button disabled={!(category && name && description && image && price && city && country)}>Add Product</button>
      </div>
    </form>
  );
}
