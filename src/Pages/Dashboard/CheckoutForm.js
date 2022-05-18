import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ appoinment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const { price, patientName, patient,_id } = appoinment;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    //confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      }
    );

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } 
    else {
      setCardError("");
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent);
      setSuccess("Congrates Your payment is completed");


      //store payment on database
        const payment = {
            appoinment: _id,
            transactionId: paymentIntent.id
        }

      fetch(`http://localhost:5000/booking/${_id}`,{
          method:'PATCH',
          headers:{
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body:JSON.stringify(payment)
      }).then(res=>res.json()).then(data=>{
          setProcessing(false)
          console.log(data)
      })
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <div>
        <p className="text-green-500">{success}
      </p>
      <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
          </div>}
    </>
  );
};

export default CheckoutForm;
