import { AuthContext } from "context";
import { useContext, useState } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";

export function AddMoneyOption() {
  const { user, getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [money, setMoney] = useState("helloTest");

  const handleAddMoney = async () => {
    try {
/*       const response = await client.put(`/profile/${user._id}`);
      setMoney(response.data.money);
      getUser() */
      navigate(`/checkout/${user._id}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleAddMoney}>Charge your account</button>
    </div>
  );
}
