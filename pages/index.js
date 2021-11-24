import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/data'
import { useState,useEffect } from 'react'


export default function Home() {
  const [page, setPage] = useState("home")
  const [hasLoaded, setHasLoaded]= useState(false)
  const appendSdkScript = () => {
    const script = document.createElement('script')
    script.src = 'https://www.mercadopago.com/v2/security.js'
    script.setAttribute('view', `${page}`)
    script.onload = () => setHasLoaded(true)
    document.body.append(script)
  };

  useEffect(() => {
    setPage("item")
      appendSdkScript()
  }, [page])


  const fetchData = async (item) => {
    setPage("item")
    fetch(`api/preference?title=${item.name}&price=${item.price}&quantity=1&picture_url=https://mercado-pago-checkout-pro.vercel.app${item.image}`)
      .then(res => res.json())
      .then(data => {
        window.location.replace(`https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=${data.id}`)
      })
      .catch(error => console.log(error))
  }

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
              <button className ={styles.button} onClick={() => fetchData(item)}>Comprar</button>
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
