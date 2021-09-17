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

				<div className={styles.image_carousel}>
					<div className={styles.image}>
					</div>
          <div className={styles.image}>
					</div>
          <div className={styles.image}>
					</div>
				</div>
        <div className={styles.lodging}>
          <p>Name:</p>
          <p>Address:</p>
          <p>Price Per Night:</p>
          <p>Total Nights:</p>
          <p>Total Price:</p>
        </div>
        <div className={styles.activities}></div>
        <div className={styles.schedule}></div>
			</main>
		</>
	);
}
