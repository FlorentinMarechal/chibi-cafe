import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm";

const PUBLIC_KEY = "pk_test_51JeKakDij0gh8k8y8yb86FD0xb6QYq7Uq6WjgVb1Hf4rqFtUfiCfMdQUMEHSsEWk1puNNQf2q7uUwDhoUf7r2W7z00ajjIPQip";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    )
}
