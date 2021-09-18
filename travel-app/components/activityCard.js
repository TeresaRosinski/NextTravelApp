import styles from "./activityCard.module.css";
export default function ActivityCard(props) {
	return (
		<div className={styles.cardCont}>
			<p className={styles.title}>Anaketeesta</p>
			<p className={styles.subText}> Gatlinburg TN </p>
			<p className={styles.subText}> Sept 2021, 10am - 4pm </p>
			<p className={styles.subText}> $50 </p>
		</div>
	);
}
