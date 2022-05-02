import { client } from "client";
import { useState } from "react";
import "./addComments.css";

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
      <form className="addComment" onSubmit={handleSubmit}>
        <label className="titleComment">Title:</label>
        <input
        className="addTitle"
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="descriptionComment">Description:</label>
        <textarea
        className="addDescription"
          type="text"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="buttonComments" disabled={!(title && description)}>Add comment</button>
      </form>
      <div></div>
    </div>
  );
}
