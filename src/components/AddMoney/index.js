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
      /* console.log(response.data); */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* {console.log(user)} */}
      
      <h1>{user.money}</h1>
      <button onClick={handleAddMoney}>Charge your account</button>
    </div>
  );
}
