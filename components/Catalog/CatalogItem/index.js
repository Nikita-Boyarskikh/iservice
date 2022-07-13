import cn from 'classnames'
import styles from './CatalogItem.module.css'

export const FEATURES = {
  FREE_DIAGNOSTIC: 'Бесплатная диагностика даже при отказе от ремонта',
}

const CatalogItem = ({
    header,
    text,
    minutes,
    price,
    active = false,
    features = [FEATURES.FREE_DIAGNOSTIC],
}) => (
  <section className={styles.item}>
    <div className={styles.content}>
      <header className={styles.header}>{header}</header>
      <main className={styles.text}>{text}</main>
      {features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature, i) => (
            <li className={styles.feature} key={i}>{feature}</li>
          ))}
        </ul>
      )}
      <footer>
        <p className={styles.price}>{price} ₽</p>
        <p className={styles.time}>От {minutes} мин</p>
      </footer>
    </div>
    <div className={cn(styles.indicator, { [styles.indicatorActive]: active })} />
  </section>
)

export default CatalogItem
