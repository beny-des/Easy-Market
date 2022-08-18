import styles from "../header/Header.module.css";
import Head from "next/head";
import Link from "next/link";
import Cart from "../cart/Cart";
import Login from "../login/Login";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NavBarDrop from "../dropDownNav/NavBarDrop";

function Header() {
 

  return (
    <nav className={styles.headNavBar}>
      <NavBarDrop />

      <Link href="/">
        <SportsEsportsIcon
        
          fontSize="large"
          sx={{ color: "rgb(255, 200, 34)", borderRadius: "30%" }}
        />
      </Link>
      <Link href="/">
        <h1 className={styles.headLine}>Easy Play</h1>
      </Link>

      <div className={styles.cartIcon}>
        <Login />
        <Cart />
      </div>
    </nav>
  );
}
export default Header;
