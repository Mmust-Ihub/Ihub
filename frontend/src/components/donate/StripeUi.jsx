// import { PaymentElement } from "@stripe/react-stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// const StripeUi = () => {
//   // Make sure to call `loadStripe` outside of a component’s render to avoid
//   // recreating the `Stripe` object on every render.
//   const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: "{{CLIENT_SECRET}}",
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <form>
//         <PaymentElement />
//         <button>Submit</button>
//       </form>
//     </Elements>
//   );
// };

// export default StripeUi;
