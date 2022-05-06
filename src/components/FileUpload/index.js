import { client } from "client";

export function FileUpload({ setImage, saveUser, setTest }) {
  const uploadImage = async (image) => {
    return await client
      .post("upload", image)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const handleFileUpload = async (e) => {
    const file = new FormData();
    file.append("myFile", e.target.files[0]);

    uploadImage(file)
      .then((response) => {
        console.log(response);
        setImage(response.path);
        saveUser(response.path);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };
  return <input type="file" name="myFile" onChange={handleFileUpload} />;
}
