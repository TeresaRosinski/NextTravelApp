import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import "animate.css"
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Travel App</title>
				<meta name="description" content="Travel application" />
			
			</Head>
			<Layout>
				<main className={styles.main}>
					<h1 className={`${styles.title} animate__animated animate__bounce`} >Travel App</h1>

					<div className={styles.grid}>
            <Link href="/allTrips">
            <a> <p className={styles.card}> All Trips I Have Built</p></a>
            </Link>
						<Link href="/buildTrip">
						<p className={styles.card}>Build a New Trip</p>
						</Link>
					
					</div>
				</main>
			</Layout>
			<footer className={styles.footer}></footer>
		</>
	);
}
