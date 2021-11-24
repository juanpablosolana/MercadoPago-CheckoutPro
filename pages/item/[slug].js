import Script from "next/script";
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import data from '../../data/data'
const item = ()=>{
  const fetchData = async (item) => {
    fetch(`../api/preference?title=${item.name}&price=${item.price}&quantity=1&picture_url=https://mercado-pago-checkout-pro.vercel.app${item.image}`)
      .then(res => res.json())
      .then(data => {
        window.location.replace(`https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=${data.id}`)
      })
      .catch(error => console.log(error))
  }

  return(
    <div>
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
              <button className={styles.button} onClick={() => fetchData(item)}>PAGAR!</button>
            </div>
          )
        })}
      </main>
      <Script src="https://www.mercadopago.com/v2/security.js" view="item"></Script>
      </div>
  )}

  export default item;