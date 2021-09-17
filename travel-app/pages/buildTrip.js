import Head from "next/head";
import styles from "../styles/buildTrip.module.css";
import "animate.css";
import Image from "next/image";

export default function BuildTrip() {
	return (
		<>
			<Head>
				<title>Build a Trip</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.page}>
				<div className={`${styles.header}`}>
					<div className={styles.image}>
						<Image src="/characterWorking.svg" height={500} width={500}></Image>
					</div>
					<div className={styles.headerText}>
						<p className={`${styles.title} animate__animated animate__rubberBand`}>
							Plan Something Extraodinary
						</p>

						<div className={styles.textSection}>
							<p className={styles.subText}>
								On this page is a form that will help you think about and answer
								some helpful trip planning questions
							</p>
							<p className={styles.subText}>All questions are optional</p>
							<p className={styles.subText}>
								This trip can always be updated and edited in the future
							</p>
						</div>
					</div>
				</div>

				<form className={styles.form}>
					<p className={styles.formTitle}>Trip Info</p>

					<div className={styles.field}>
						<label>Name</label>
						<input
							type="text"
							name="trip[name]"
							placeholder="Trip Name"></input>
					</div>
					<div className={styles.field}>
						<label>Location</label>
						<input
							type="text"
							name="trip[location]"
							placeholder="Location"></input>
					</div>
					<div className={styles.field}>
						<label>Lodging</label>
						<input
							type="text"
							name="trip[lodging]"
							placeholder="Lodging"></input>
					</div>

					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Start Date</label>
							<input
								type="date"
								name="trip[start-date]"
								id="trip-start"
								min="2021-09-17"
								nax="2041-09-17"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>End Date</label>
							<input
								type="date"
								name="trip[end-date]"
								id="trip-end"
								min="2021-09-17"
								max="2041-09-17"></input>
						</div>
					</div>
					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Budget</label>
							<input
								type="number"
								name="trip[budget]"
								id="budget"
								palceholder="$"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>Quantity of People Going</label>
							<input
								type="number"
								name="trip[budget]"
								id="budget"
								palceholder="$"></input>
						</div>
					</div>
					<div className={styles.buttonHolder}>
						<button className={styles.button} type="submit">
							SUBMIT
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
