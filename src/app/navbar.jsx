import styles from "@/app/page.module.css";

export default function Navbar() {
    return (
        <>
            <div className={styles.nav}>
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
