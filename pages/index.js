import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/data'
import MercadoPagoCheckout from 'react-mercadopago-checkout'



export default function Home() {

  const fetchData = async (item) => {

    fetch(`api/preference?title=${item.name}&price=${item.price}&quantity=1`)
      .then(res => res.json())
      .then(data => {
        <MercadoPagoCheckout
          publicKey={'APP_USR-1159009372558727-072921-8d0b99 80c7494985a5abd19fbe921a3d-617633181'}
          preferenceId={data}
          onSuccess={(data) => console.log(data)}
        />
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
