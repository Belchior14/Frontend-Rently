import { client } from "client";
import { useState } from "react";

export function AddCommentsForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addComment = async (title, description) => {
    try {
      const response = await client.post(
        `/product/${window.location.href.split("/").at(-1)}`,
        {
          title,
          description,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
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
        <button disabled={!(title && description)}>Add comment</button>
      </form>
      <div>
          
      </div>
    </div>
  );
}
