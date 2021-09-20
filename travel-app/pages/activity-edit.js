import Head from "next/head";
import styles from "../styles/activity.module.css";
import "animate.css";
import Image from "next/image";
import Link from "next/link";

export default function BuildTrip() {
	return (
		<>
			<Head>
				<title>Build a Trip</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main>
				<div className={styles.header}>
					<p className={styles.title}>Edit Dynamically Render Name Here</p>
				</div>

				<div className={styles.content}>
					<form className={styles.form}>
						{" "}
						<p className={styles.formTitle}>Dyn Render Name</p>
						<div className={styles.field}>
							<label>Name</label>
							<input
								type="text"
								name="activity[name]"
								placeholder="Dyn Name"></input>
						</div>
						<div className={styles.field}>
							<label>Location</label>
							<input
								type="text"
								name="activity[location]"
								placeholder="Dyn Location"></input>
						</div>
						<div className={styles.fields_row}>
							<div className={styles.field_2inputs}>
								<label>Date</label>
								<input
									type="date"
									name="activity[date]"
									id="activity-date"
									min="2021-09-17"
									nax="2041-09-17"></input>
							</div>
							<div className={styles.field_2inputs}>
								<label>Price Per Person</label>
								<input
									type="number"
									name="activity[price]"
									id="price"
									palceholder="$Dyn Price"></input>
							</div>
						</div>
						<div className={styles.buttonHolder}>
							<button className={styles.button} type="submit">
								SAVE CHANGES
							</button>
						</div>
					</form>
					<div className={styles.image}>
						<Image src="/character22.svg" height={500} width={500}></Image>
					</div>
				</div>
				<Link href="/specific-trip">
					<a className={styles.back}>back</a>
				</Link>
			</main>
		</>
	);
}
