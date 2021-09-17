import Head from "next/head";
import styles from "../styles/SpecificTrip.module.css";
import "animate.css";
import Image from "next/image";

export default function SpecificTrip() {
	return (
		<>
			<Head>
				<title>Specific Trip</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.page}>
				<div>
					<p className={styles.title}>Trip Name</p>
					<p>Trip Dates: Pulled in automatically from form</p>
				</div>

				<div className={styles.image}>
					<Image src="/smokies.svg" height={500} width={500}></Image>
				</div>
			</main>
		</>
	);
}
