import styles from "@/app/page.module.css";
import {K2D} from "@next/font/google";
const k2d = K2D({weight: "400", subsets: ['latin']})

export default function Navbar() {
    return (
        <>
            <div className={`${styles.nav} ${k2d.className}`}>
                <div className="left"><p>📚 Bookshelf</p></div>
                <div className="right">
                    <div className={styles.greyLabel}>
                        Hi! bazsup <span className={styles.yellowCircle}>B</span>
                    </div>
                </div>
            </div>
        </>
    )
}
