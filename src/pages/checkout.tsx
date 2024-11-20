import { useRouter } from "next/router";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Link from  "next/link";

const Checkout = () => {
  const router = useRouter();
  const { product, price, image } = router.query; // Capture product details from query parameters

  const handleApprove = (orderID: string) => {
    console.log("Order ID:", orderID);
    alert(`Payment successful! Order ID: ${orderID}`);
    // Optional: Redirect to a success page or save order details in a database
  };

  const handleError = (error: any) => {
    console.error("PayPal Checkout Error:", error);
    alert("An error occurred during the payment process.");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
    
      <Link href="/merch">
      <h1 className="absolute top-4 left-4">Back</h1>
      </Link>
    
      
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>

      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-2xl mb-8">
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
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price as string, // Convert price to a string
                  },
                  description: product as string, // Optional: Include product description
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            if (actions.order) {
              const order = await actions.order.capture(); // Capture the payment
              handleApprove(order.id); // Handle approved order
            }
          }}
          onError={handleError}
        />
      </div>
    </div>
  );
};

export default Checkout;
