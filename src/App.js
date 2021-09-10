import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { MyCheckoutForm } from "./MyCheckoutForm";
import "./App.css";

const stripePromise = loadStripe("YOUR_PUBlIC_KEY_HERE");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
}

export default App;
