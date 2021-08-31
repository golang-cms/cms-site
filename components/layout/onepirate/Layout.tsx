import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import styles from "../../../styles/Home.module.css";
import Footer from "./Footer";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
}));

const Layout = ({ children, props }: any) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>SmartCodee</title>
        <meta name="description" content="Smart codee" />
      </Head>
      <Header props={props} />
      <main className={styles.main}>{children}</main>
      <Footer props={props} />
      <Button className={classes.hidden} hidden={true} />
        <Script strategy="lazyOnload">{`console.log('hhhhh')`}</Script>
    </>
  );
};

export default Layout;
