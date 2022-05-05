import { client } from "client";
import { AuthContext } from "context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUpload } from "components/FileUpload";

export function EditProfile({setTest}) {
  const navigate = useNavigate();
  const [theUser, setTheUser] = useState();
  const [image, setImage] = useState("");
  const {user} = useContext(AuthContext)

  const oneUser = async () => {
    try {
      const response = await client.get(
        `/profile/${window.location.href.split("/").at(-1)}`
      );
      setTheUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveUser = async (imagePath) => {
    try {
      console.log(image)
      const response = await client.put(
        `/profile/edit/${window.location.href.split("/").at(-1)}`,
        {
          image: imagePath,
        }
      )
      setTest(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave =  (e) => {
    e.preventDefault();
    navigate(`/profile/${user._id}`);
  };

  return <div>
      <form onSubmit={handleSave}>
      <FileUpload setTest={setTest} saveUser={saveUser} setImage={setImage} />
              <button type="submit">Change Image</button>
      </form>
  </div>;
}
