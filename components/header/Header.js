import styles from "../header/Header.module.css";
import Head from "next/head";
import Link from "next/link";
import Cart from "../cart/Cart";
import Login from "../login/Login";

function Header() {
  <Head>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
  </Head>;
  return (
    <nav className={styles.headNavBar}>
      <div className={styles.cartIcon}>
      <Login />
        <Cart />
      </div>

      <h1 className={styles.headLine}>Easy Play</h1>

      <div className={styles.navbar}>
        <Link href="/">
          <a className="home">Home</a>
        </Link>
        <Link href="/news">
          <a className="news">News</a>
        </Link>

        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Games
            <i className={styles.arrowDown}></i>
          </button>

          <div className={styles.dropdownContent}>
            <Link href="/category">
              <a>Coming soon</a>
            </Link>
            <Link href="/reviews">
              <a>Reviews</a>
            </Link>
            <Link href="/link3">
              <a>Game Blogs</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
