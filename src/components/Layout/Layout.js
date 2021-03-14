import React from 'react'
import Head from 'next/head';
import styles from './Layout.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Shop</title>
                <link rel='icon' href='/public/letrav.ico' />
            </Head>
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>Made by Andre</footer>
            <div className={styles.freepick}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}
