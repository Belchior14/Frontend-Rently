import { useContext, useState } from "react";

export function AddProductsForm() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");  
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Category:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
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