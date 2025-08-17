import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <AppBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default Layout;