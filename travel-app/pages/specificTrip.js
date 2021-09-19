import Head from "next/head";
import styles from "../styles/specificTrip.module.css";
import "animate.css";
import ActivityCard from "../components/activityCard";
import Image from "next/image";
import Link from "next/Link";

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
						<p className={styles.title}>Smoky Mountains</p>
						<p className={styles.subText}>From: 08/22/2022</p>
						<p className={styles.subText} >To: 09/17/2022</p>
						<p className={styles.subText}>15 Days</p>
						<p className={styles.subText}>14 Nights</p>
					</div>
				</div>
				<div className={styles.sectionContainerCenter}>
					
				<p className={styles.sectionTitle}>Lodging</p>
					<div className={styles.lodging}>

						<p className={styles.subText}>Name: <span>VRBO </span></p>
						<p className={styles.subText}>Address:<span>23413 Maggie Valley, North Carolina, SUA</span></p>
						<p className={styles.subText}>Price Per Night: <span>$345</span> </p>
						<p className={styles.subText}>Total Nights:<span>14</span> </p>
						<p className={styles.subText}>Total Price:<span>$23413</span></p>
					</div>
				</div>

				<div className={styles.sectionContainerLeft}>
					<p className={styles.sectionTitle}>Activities</p>
					<Link href='/newActivity'>
						<a className={styles.button}>Add New Activity</a>
					</Link>
					<div className={styles.activities}>
						<ActivityCard />
						<ActivityCard />
						<ActivityCard />
					</div>
				</div>
			</main>
		</>
	);
}
