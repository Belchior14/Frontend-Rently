import { AuthContext } from "context";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckOutForm25.css"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "client";


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout25 = () => {
  const { user, getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [money, setMoney] = useState("helloTest");
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KtbQMCXplYtKDTZMw4rzLBq",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  const handleAddMoney = async () => {
    try {
      const response = await client.put(`/checkout/${user._id}/25`);
      setMoney(response.data.money);
      getUser()
      navigate(`/checkout/${user._id}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout">

      <button
        className="checkout-button"
        onClick={handleAddMoney}
        disabled={isLoading}
        //redirectToCheckout
      >

        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "25€"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout25;
