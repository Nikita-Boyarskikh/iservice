import styles from './Hero.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <h1 className={styles.header}>Переклейка дисплея любого iphone</h1>
    <div className={styles.subheader}>
      Oригинальные запчасти<br />
      Разумные цены<br />
      Выезд
    </div>
  </section>
)

export default Hero
