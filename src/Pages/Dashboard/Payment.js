import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0YXaEgVD8phfXM8dDakoBtn1Khl0MXIGTMgEmOmLbjQEkziGw7qDNQdemfQxRhX1f4p7SrfRamvLAw5vrCLvH500J9J8y4ji"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://frozen-ravine-48916.herokuapp.com/booking/${id}`;
  const { data: appoinment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-10">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appoinment?.patientName}
          </p>
          <h2 class="card-title">Pay for {appoinment.treatment}</h2>
          <p>
            Your Appoinment:{" "}
            <span className="text-orange-700">{appoinment.date} </span> at{" "}
            {appoinment.slot}
          </p>
          <p>Please pay: ${appoinment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appoinment={appoinment} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
