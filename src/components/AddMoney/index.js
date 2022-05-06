import { AuthContext } from "context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./addMoney.css";

export function AddMoneyOption() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddMoney = async (e) => {
    try {
      e.preventDefault();
      navigate(`/checkout/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className="addMoneyBtn" onClick={handleAddMoney}>
        Charge your account
      </button>
    </div>
  );
}
