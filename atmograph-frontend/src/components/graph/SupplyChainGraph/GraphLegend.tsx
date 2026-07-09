import styles from "./GraphLegend.module.css";

const GraphLegend = () => {
  return (
    <div className={styles.legend}>
      <div>
        <span className={`${styles.dot} ${styles.supplier}`} />
        Supplier
      </div>

      <div>
        <span className={`${styles.dot} ${styles.manufacturer}`} />
        Manufacturer
      </div>

      <div>
        <span className={`${styles.dot} ${styles.port}`} />
        Port
      </div>

      <div>
        <span className={`${styles.dot} ${styles.risk}`} />
        High Risk
      </div>
    </div>
  );
};

export default GraphLegend;