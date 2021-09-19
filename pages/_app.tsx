import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "../styles/globals.css";
import type { Page } from "../src/types/page";
import { NavModel, SiteConfigModel } from "../src/model/siteConfig";
import { SiteConfigProvider } from "../src/providers/siteConfig/siteConfigProvider";
import { NextPage } from "next";

// this should give a better typing

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, siteConfig: SiteConfigModel) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return getLayout(
    <SiteConfigProvider value={siteConfig}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.reCaptchaKey}>
        <Script id="app-page-id" strategy="lazyOnload">{`console.log('app page load')`}</Script>
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </SiteConfigProvider>, siteConfig
  );
}

/*
type Props = AppProps & {
  Component: Page;
  javascript?: string;
};
function OldMyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(
    <SiteConfigProvider value={siteConfig}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.reCaptchaKey}>
        <Script strategy="lazyOnload">{`console.log('sssss')`}</Script>
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </SiteConfigProvider>
  );
}
*/

export const siteConfig: SiteConfigModel = {
  name: "SmartCodee",
  domain: "smartcodee.com",
  address: "1275 Av. des Canadiens-de-Montréal, Montréal, QC H3B 0G4",
  phone: "514-999-7155",
  email: "info@smartcodee.com",
  navs: [
    {
      name: "CONTACT US",
      slug: "/contact-us",
    },
    {
      name: "ABOUT US",
      slug: "/about-us",
    },
  ] as NavModel[],
} as SiteConfigModel;
export default MyApp;
