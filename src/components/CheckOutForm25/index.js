import { AuthContext } from "context";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckOutForm25.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "client";

export function CheckoutForm() {

  const { user, getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [money, setMoney] = useState("helloTest");

  const handleAddMoney = async () => {
    try {
      const response = await client.put(`/profile/${user._id}`);
      setMoney(response.data.money);
      navigate(`/profile/${user._id}`)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="paymentDiv">
      <div class="wrapper">
      <div class="input-box">
              <input
                type="number"
                placeholder="Amount to pay"
                required
                class="name"
                id="price"
              />
            </div>
        <form method="POST">
          <h4>Account</h4>
          <div class="input-group">
            <div class="input-box">
              <input
                type="text"
                placeholder="Full Name"
                required
                class="name"
              />
              <i class="fa fa-user icon"></i>
            </div>
            <div class="input-box">
              <input
                type="text"
                placeholder="Nick Name"
                required
                class="name"
              />
              <i class="fa fa-user icon"></i>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <input
                type="email"
                placeholder="Email Adress"
                required
                class="name"
              />
              <i class="fa fa-envelope icon"></i>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <h4>Date of Birth</h4>
              <input type="text" placeholder="DD" class="dob" />
              <input type="text" placeholder="MM" class="dob" />
              <input type="text" placeholder="YYYY" class="dob" />
            </div>
            <div class="input-box">
              <h4>Gender</h4>
              <input type="radio" id="b1" name="gendar" checked class="radio" />
              <label for="b1">Male</label>
              <input type="radio" id="b2" name="gendar" class="radio" />
              <label for="b2">Female</label>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <h4>Payment Details</h4>
              <input type="radio" name="pay" id="bc1" checked class="radio" />
              <label for="bc1">
                <span>
                  <i class="fa fa-cc-visa"></i> Credit Card
                </span>
              </label>
              <input type="radio" name="pay" id="bc2" class="radio" />
              <label for="bc2">
                <span>
                  <i class="fa fa-cc-paypal"></i> Paypal
                </span>
              </label>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <input
                type="tel"
                placeholder="Card Number"
                required
                class="name"
              />
              <i class="fa fa-credit-card icon"></i>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <input type="tel" placeholder="Card CVC" required class="name" />
              <i class="fa fa-user icon"></i>
            </div>
            <div class="input-box">
              <select>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <select>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <button onClick={handleAddMoney} className="paymentButton" type="submit">PAY NOW</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
