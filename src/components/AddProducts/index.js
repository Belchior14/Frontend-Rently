import { useContext, useState } from "react";
import { client } from "client";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "context";

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
    console.log(user);
    navigate(`/profile/${user._id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <label>Image:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
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
      <button type="onSubmit">Add Product</button>
    </form>
  );
}
