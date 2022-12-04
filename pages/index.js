import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'


export default function Home() {
  return (
    <>
    <Navbar />
    
      <main className={styles.main}>

       
        <h1 className={styles.title}>
          Welcome to <a href="Auth//login">Instagram</a>
        </h1>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/i.png" alt="Instagram Logo" width={100} height={25} />
          </span>
        </a>
      </footer>

          </>
  )
}
