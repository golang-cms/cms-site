import { Box, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import styles from "../../../styles/Home.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { MicNoneTwoTone } from "@material-ui/icons";

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
    </>
  );
};

export default Layout;
