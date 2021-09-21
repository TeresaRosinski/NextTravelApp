import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import "animate.css";
import Link from "next/link";
import Navbar from "../components/navbar";
export default function Home() {
	return (
		<>
			<Head>
				<title>Travel App</title>
				<meta name="description" content="Travel application" />
			</Head>
			<Navbar />

			<main className={styles.main}>
				<h1 className={`${styles.title} animate__animated animate__bounce`}>
					Travel App
				</h1>

				<div className={styles.grid}>
					<Link href="/all-trips">
						<a className={styles.card}>
							<p>All Trips</p>
						</a>
					</Link>
					<Link href="/build-trip">
						<a className={styles.card}>
							<p>Build a New Trip</p>
						</a>
					</Link>
				</div>
			</main>
		</>
	);
}
