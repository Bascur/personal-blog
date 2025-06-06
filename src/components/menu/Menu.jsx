import React from "react";
import styles from "./menu.module.css"
import Link from "next/link"
import Image from "next/image"

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.c}`}>C Language</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joaquin Bascur</span>
                            <span className={styles.date}> - 06.06.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.cloud}`}>Cloud</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joaquin Bascur</span>
                            <span className={styles.date}> - 06.06.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.gba}`}>GBA</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joaquin Bascur</span>
                            <span className={styles.date}> - 06.06.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.music}`}>Music</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joaquin Bascur</span>
                            <span className={styles.date}> - 06.06.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.art}`}>Art</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joaquin Bascur</span>
                            <span className={styles.date}> - 06.06.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.writing}`}>Writing</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joaquin Bascur</span>
                            <span className={styles.date}> - 06.06.2025</span>
                        </div>
                    </div>
                </Link>
            </div>
          
        </div>
    )
}

export default Menu