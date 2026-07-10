import styles from "./TopRiskCountries.module.css";

const countries = [
  { name: "China", value: 92 },
  { name: "Netherlands", value: 76 },
  { name: "USA", value: 64 },
  { name: "India", value: 42 },
];

const TopRiskCountries = () => {
  return (
    <div className={styles.card}>
      <h3>Top Risk Countries</h3>

      {countries.map((country) => (
        <div key={country.name} className={styles.row}>
          <div className={styles.header}>
            <span>{country.name}</span>
            <span>{country.value}%</span>
          </div>

          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: `${country.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRiskCountries;