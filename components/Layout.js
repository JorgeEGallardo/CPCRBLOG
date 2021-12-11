import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
const Layout = ({children}) => (
    <>
        <Navbar></Navbar>
        <main className={styles.main_container+" py-4"}>
        {children}
        </main>
    </>
)

export default Layout