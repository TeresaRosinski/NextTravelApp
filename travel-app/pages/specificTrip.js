import Head from "next/head";
import styles from "../styles/SpecificTrip.module.css";
import "animate.css";
import ActivityCard from "../components/activityCard";
import Image from "next/image";

export default function SpecificTrip() {
	return (
		<>
			<Head>
				<title>Specific Trip</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.page}>
				<div className={styles.header}>
					<div className={styles.headerText}>
						<p className={styles.title}>Trip Name</p>
						<p>Trip Dates: Pulled in automatically from form</p>
					</div>
					<div className={styles.headerImage}></div>
				</div>
				<div className={styles.lodging}>
					<p className={styles.sectionTitle}>Lodging</p>
					<p className={styles.sectionContent}>Name:</p>
					<p className={styles.sectionContent}>Address:</p>
					<p className={styles.sectionContent}>Price Per Night:</p>
					<p className={styles.sectionContent}>Total Nights:</p>
					<p className={styles.sectionContent}>Total Price:</p>
				</div>

				<div className={styles.activities}>
					<p className={styles.sectionTitle}>Activities</p>
					<ActivityCard />
				</div>
				<div className={styles.schedule}>
					<p className={styles.sectionTitle}>schedule</p>
				</div>
			</main>
		</>
	);
}
