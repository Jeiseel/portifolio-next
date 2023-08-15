import Footer from '../components/Footer'
import Me from '../components/Me'
import Navbar from '../components/Navbar'
import styles from '../styles/page.module.css'
export default function HomePage() {
    return (
        <>
            <div className={styles.description}>
                <Navbar/>
                <Me/>
                <Footer/>
            </div>
        </>
    )
}