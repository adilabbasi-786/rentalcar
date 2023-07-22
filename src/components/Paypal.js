import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { URL } from "../utills";
import { json } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Paypal(props) {
  const auth = useContext(AuthContext);
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AZ81tSPEgxMjCYPjrk2RRo3JcL1hQWy-mhylfw6u3R0my6fr7qaO6z5X0KeF-34oZtxjnfP4le1_SgWb",
        currency: "USD",
      }}
    >
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "50",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          const transactionId = order.id;
          //   await fetch(`${URL}/api/update_payment_status/`, {
          //     method: "Post",
          //     body: JSON.stringify({
          //       transactionId: transactionId,
          //       bookingId: 31,
          //     }),
          //     headers: { Authorization: `Bearer ${auth.token} ` },
          //   });

          let headersList = {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            Authorization: `Bearer ${auth.token} `,
            "Content-Type": "application/json",
          };

          let bodyContent = JSON.stringify({
            bookingId: props.booking,
            transactionId: transactionId,
          });

          let response = await fetch(`${URL}/api/update_payment_status/`, {
            method: "POST",
            body: bodyContent,
            headers: headersList,
          });

          let responseData = await response.text();
          console.log(responseData);

          props.onFinish();
        }}
      />
    </PayPalScriptProvider>
  );
}
