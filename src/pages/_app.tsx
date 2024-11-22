import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Import PayPal SDK Provider
import { api } from "~/utils/api";
import Head from "next/head";
import Script from "next/script"; 

import "~/styles/globals.css";

// Define initial PayPal configuration options
const initialPayPalOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",
  currency: "USD", 
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    
    <PayPalScriptProvider options={initialPayPalOptions}>
      <div className={GeistSans.className}>
      <Head>
      <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
        
      </div>
    </PayPalScriptProvider>
  );
};

export default api.withTRPC(MyApp);
