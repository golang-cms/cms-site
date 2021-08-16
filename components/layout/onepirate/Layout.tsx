import styles from "../../../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

const Layout = ({ children, props }: any) => {
  return (
    <>
      <Header props={props} />
      <main className={styles.main}>{children}</main>
      <Footer props={props} />
      <Button hidden={true} />
    </>
  );
};

export default Layout;
