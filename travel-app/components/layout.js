import styles from './layout.module.css'
// for component level styling

export default function Layout({ children }) {
	return <div className = {styles.container}> {children} </div>;
}
