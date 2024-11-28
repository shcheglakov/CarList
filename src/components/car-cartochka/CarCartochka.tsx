import styles from "./CarCartochka.module.scss"

export function CarCartochka({ brand, model, price, city, image_url }: { brand: string, model: string, price: number, city: string, image_url: string }) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image_url})` }}>
        <div className={styles.content}>
        <h1>{brand}</h1>
        <h2>{model}</h2>
        <p>{city} {price} $</p>
      </div>
    </div>
  );
}
