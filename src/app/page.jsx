import {Playfair_Display} from '@next/font/google'
import styles from './page.module.css'
import Navbar from "@/app/navbar";

const playfairDisplay = Playfair_Display({weight: "900", subsets: ['latin']})

export default function Home() {
  return (
      <>
        <Navbar/>
        <main className={styles.main}>
            <h1 className={playfairDisplay.className}>THE COLLECTION</h1>
            <p>This is body</p>
        </main>
      </>
  )
}
