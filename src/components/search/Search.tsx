import styles from './Search.module.scss'

export default function Search() {
  return (
    <div className={styles.input_container}>
      <img src="../src/assets/icons/search.svg" alt="" width="28px" height="28px"/>
      <input type="text" placeholder='Search' />
    </div>
  )
}
