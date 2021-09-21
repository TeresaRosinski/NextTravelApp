import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link href="/"><a className={styles.title}>TravelApp</a></Link>
            <Link href="/build-trip"><a className={styles.link}>New Trip</a></Link>
            <Link href="/all-trips"><a className={styles.link}>All Trips</a></Link>
		</nav>
	);
}