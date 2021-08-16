import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import styles from "../../../styles/Home.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Head from 'next/head';

const Layout = ({ children, props }: any) => {
  return (
    <>
      <Head>
        <title>SmartDev Teams</title>
        <meta name="description" content="Smart dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header props={props} />
      <main className={styles.main}>{children}</main>
      <Footer props={props} />
      <Box display="none" displayPrint="block">
        <Button hidden={true} />
      </Box>
    </>
  );
};

export default Layout;
