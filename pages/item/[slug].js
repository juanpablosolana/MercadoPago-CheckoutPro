import Script from "next/script";
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import data from '../../data/data'
const item = ({item})=>{
  console.log(item)
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
      </div>
  )}

  export default item;