import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Page } from '../types/page'

// this should give a better typing
type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
