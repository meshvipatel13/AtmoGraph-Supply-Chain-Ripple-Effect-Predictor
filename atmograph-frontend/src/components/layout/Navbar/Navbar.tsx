import styles from "./Navbar.module.css";

import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

import {

Bell,

Sun,

ChevronDown

} from "lucide-react";

const Navbar = () => {

return (

<header className={styles.navbar}>

<SearchBar />

<div className={styles.right}>

<Bell size={22} />

<Sun size={22} />

<UserProfile />

<ChevronDown size={18} />

</div>

</header>

);

};

export default Navbar;