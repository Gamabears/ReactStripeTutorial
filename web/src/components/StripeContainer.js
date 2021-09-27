import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51JV5Y7HlBXrwFd5mRDJrb8eoKrGkKS5LyZ1zYze77ZwFL3pxfjYtzBIxqu8O9p3bhXQt7YV0n4Zo6CXhLfAjLxDY00aHkHkAHy"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
