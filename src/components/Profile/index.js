import { useContext, useState, useEffect } from "react";
import { client } from "client";
import "./profile.css";
import { Link } from "react-router-dom";
import { AddMoneyOption } from "components/AddMoney";
import { AuthContext } from "context";

export function ProfileShow() {
  const [userProfile, setUserProfile] = useState(null);
  const {user} = useContext(AuthContext)
  const oneUser = async () => {
    try {
      const response = await client.get(
       `/profile/${window.location.href.split("/").at(-1)}`
); 
setUserProfile(response.data)
} catch (error) {
      console.log(error)
    }
  };

  useEffect(() => { 
    oneUser();
  }, []);

  return (
    <div className="userInfo">

    </div>
  );
}
