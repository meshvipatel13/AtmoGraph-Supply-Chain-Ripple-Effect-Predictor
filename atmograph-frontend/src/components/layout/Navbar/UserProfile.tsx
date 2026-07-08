import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.profile}>

      <img
        src="https://tse3.mm.bing.net/th/id/OIP.dyxjIxJtIRt7O_AfRQbZUAHaHa?pid=Api&P=0&h=180"
        alt="User"
      />

      <div>

        <h4>Ananya Sharma</h4>

        <span>Risk Analyst</span>

      </div>

    </div>
  );
};

export default UserProfile;