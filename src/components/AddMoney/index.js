import { AuthContext } from "context";
import { useContext, useState } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";
import "./addMoney.css"

export function AddMoneyOption() {
  const { user, getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [money, setMoney] = useState("helloTest");

  const handleAddMoney = async (e) => {
    try {
      e.preventDefault()
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
      <button className="addMoneyBtn" onClick={handleAddMoney}>Charge your account</button>
      
    </div>
  );
}
