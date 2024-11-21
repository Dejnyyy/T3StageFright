import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className={styles["sound-loader"]}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <p className="text-white mt-4 text-xl">Loading Stage Fright...</p>
    </div>
  );
};

export default Loading;
