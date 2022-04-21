import { AuthContext } from "context";
import { useContext, useState, useEffect } from "react";
import { client } from "client";

export function AddMoneyOption() {
  const { user, getUser } = useContext(AuthContext);
  
  const [money, setMoney] = useState("helloTest");

  const handleAddMoney = async () => {
    try {
      const response = await client.put(`/profile/${user._id}`);
      setMoney(response.data.money);
      getUser()
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
