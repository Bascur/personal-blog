import React from "react";
import styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo-3.png" alt="Bascur Blog" width={50} height={50} />
                    <h1 className={styles.logoText}>ascur Blog</h1>
                </div>
                <p className={styles.desc}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit corporis cum? Veritatis dolorum, hic repellendus sapiente ipsam ab neque nam consequatur aliquam. Eligendi, nihil esse assumenda tempora sequi non!</p>
                <div className={styles.icons}>
                    <Image src="/instagram.png" alt="Bascur Blog" width={18} height={18} />
                    <Image src="/youtube.png" alt="Bascur Blog" width={18} height={18} />
                    <Image src="/linkedin-2.png" alt="Bascur Blog" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">C</Link>
                    <Link href="/">Cloud</Link>
                    <Link href="/">GBA</Link>
                    <Link href="/">Music</Link>
                    <Link href="/">Art</Link>
                    <Link href="/">Writing</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Youtube</Link>
                    <Link href="/">Linkedin</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer