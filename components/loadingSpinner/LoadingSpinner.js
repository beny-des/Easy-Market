import styles from "../loadingSpinner/LoadingSpinner.module.css";

const LoadingSpinner = () => {
  
  return (
    <div className={styles.spinCont}>
      <h1 >Loading...</h1>
      <div className={styles.loader}>
        <div className={styles.inner}>
        </div>
      </div>
    </div>
  );
};
export default LoadingSpinner;
