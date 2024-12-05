import { useRouter } from "next/router";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Link from  "next/link";
import { useState, useEffect } from "react";
import Loading from "./Loading/loading";
import styles from "./Loading/loading.module.css";

const Checkout = () => {
  const router = useRouter();
  const { product, price, image } = router.query;
  const [isLoading, setIsLoading] = useState(true); 
  const [isFadingOut, setIsFadingOut] = useState(false); 

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsFadingOut(true); 
      setTimeout(() => setIsLoading(false), 1000); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className={`${styles["fade-out"]} ${
          isFadingOut ? styles["fade-out-active"] : ""
        } text-center fade-in`}
      >
        <Loading />
      </div>
    );
  }
  const handleApprove = (orderID: string) => {
    console.log("Order ID:", orderID);
    alert(`Payment successful! Order ID: ${orderID}`);
    // Optional: Redirect to a success page or save order details in a database
  };

  const handleError = (error: unknown) => {
    console.error("PayPal Checkout Error:", error);
    alert("An error occurred during the payment process.");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
    
      <Link href="/merch">
      <h2 className="fixed top-4 left-4 hover:underline">Back</h2>
      </Link>
    
      <h1 className="text-center mb-4 text-7xl mt-10 bg-clip-text text-transparent bg-center bg-cover">
            Check out
        </h1>
          
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row items-center bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-2xl mb-8">
        {/* Product Image */}
        <Image
          src={typeof image === "string" ? image : ""}
          alt={product as string}
          width={300}
          height={300}
          className="rounded-md"
        />

        {/* Product Info */}
        <div className="flex flex-col items-start ml-0 lg:ml-6 mt-4 lg:mt-0">
          <h2 className="text-2xl font-medium">{product}</h2>
          <p className="text-lg mt-2">Price: ${price}</p>
        </div>
      </div>

      {/* PayPal Buttons Section */}
      <div className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-md">
      <PayPalButtons
        style={{   
        shape: "pill",
        layout: "vertical",
        color: "white", }}
  createOrder={(data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    currency_code: "USD", 
                    value: price as string,
                },
                description: product as string,
            },
        ],
        intent: "CAPTURE"
    });
  }}
  onApprove={async (data, actions) => {
    if (actions.order) {
      const order = await actions.order.capture(); // Capture the payment
      handleApprove(order.id ?? "unknown order id");
    }
  }}
  onError={handleError}
/>

      </div>
      {/* Inline Styles */}
      <style jsx>{`
        h1 {
          background: url("/background.webp") 50% 50%;
          background-size: cover;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      `}</style>
       {/* Rotating Logo */}
       <section className="w-1/2 mx-auto pt-8 text-center">
          <div className="perspective">
            <Image
                width={300}
                height={300}
              src="/StageFrightNobg.png"
              alt="Stage Fright Logo"
              className="rotating-side-logo mx-auto w-1/2"
            />
          </div>
        </section>
    </div>
  );
};

export default Checkout;
