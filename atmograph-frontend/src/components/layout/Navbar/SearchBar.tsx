import styles from "./SearchBar.module.css";

import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className={styles.searchBox}>
      <Search size={18} />

      <input
        type="text"
        placeholder="Search for suppliers, products, ports..."
      />
    </div>
  );
};

export default SearchBar;