import { ICars } from "../../pages/types";
import { CarCartochka } from "../car-cartochka/CarCartochka";
import styles from "./CarList.module.scss"

export function CarList({data}:{data: ICars[]}) {
  if (!data || data.length === 0) {
    return (
      <div className={styles.cars_list_main_block}>
        Ничего не найдено
      </div>
    );
  }
  return (
    <div className={styles.cars_list_main_block}>
      {data?.map(car => (
        <CarCartochka key={car.id} brand={car.brand} model={car.model} city={car.city} price={car.price} image_url={car.image_url}/>
      ))}
    </div>
  )
}