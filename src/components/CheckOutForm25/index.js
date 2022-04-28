import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckOutForm25.css"

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout25 = () => {
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

  return (
    <div className="checkout">

      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >

        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "25€"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout25;
