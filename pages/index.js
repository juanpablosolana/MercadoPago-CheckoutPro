import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/data'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Home() {
  const [page, setPage] = useState("home")
  const [hasLoaded, setHasLoaded] = useState(false)
  const appendSdkScript = () => {
    const script = document.createElement('script')
    script.src = 'https://www.mercadopago.com/v2/security.js'
    script.setAttribute('view', `${page}`)
    script.onload = () => setHasLoaded(true)
    document.body.append(script)
  };

  useEffect(() => {
    appendSdkScript()
  }, [page])


  return (
    <div className={styles.container}>
      <Head>
        <title>Tienda online</title>
        <meta name="description" content="Mercado Pago Checkout Pro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tienda Online
        </h1>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <Image src={item.image} width={300} height={300} alt="Product" />
              <p>¡Ultima pieza! solo ${item.price}</p>
              <Link href={`/item/${item.name}`}><a className={styles.button} onClick={() => document.body.remove(script)}>Comprar</a></Link>
            </div>
          )
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://pablosolana.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Pablo Solana{' '}
        </a>
      </footer>

    </div>
  )
}