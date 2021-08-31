import type { AppProps } from "next/app";
import React from "react";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "../styles/globals.css";
import type { Page } from "../types/page";

// this should give a better typing
type Props = AppProps & {
  Component: Page;
  javascript?: string;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(
    <GoogleReCaptchaProvider reCaptchaKey={process.env.reCaptchaKey}>
      <Script strategy="lazyOnload">{`console.log('sssss')`}</Script>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}
export default MyApp;
