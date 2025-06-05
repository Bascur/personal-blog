import React from "react";
import styles from "./categoryList.module.css"
import Link from "next/link"
import Image from "next/image"

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=c" className={`${styles.category} ${styles.c}`}>
                    <Image src="/c.png" alt="" width={32} height={32} className={styles.image} />
                    Language
                </Link>
                <Link href="/blog?cat=cloud" className={`${styles.category} ${styles.cloud}`}>
                    <Image src="/cloud.png" alt="" width={32} height={32} className={styles.image} />
                    Cloud
                </Link>
                <Link href="/blog?cat=gba" className={`${styles.category} ${styles.gba}`}>
                    <Image src="/gba-5.png" alt="" width={40} height={32} className={styles.image} />
                    GBA
                </Link>
                <Link href="/blog?cat=music" className={`${styles.category} ${styles.music}`}>
                    <Image src="/music-2.png" alt="" width={32} height={32} className={styles.image} />
                    Music
                </Link>
                <Link href="/blog?cat=art" className={`${styles.category} ${styles.art}`}>
                    <Image src="/brush.png" alt="" width={28} height={32} className={styles.image} />
                    Art
                </Link>
                 <Link href="/blog?cat=writing" className={`${styles.category} ${styles.writing}`}>
                    <Image src="/writing.png" alt="" width={40} height={32} className={styles.image} />
                    Writing
                </Link>

            </div>

        </div>
    )
}

export default CategoryList