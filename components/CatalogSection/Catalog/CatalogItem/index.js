import cn from 'classnames'

import { ITEM_FEATURES } from 'constants'

import styles from './CatalogItem.module.css'

const CatalogItem = ({
    header,
    text,
    minutes,
    price,
    active = false,
    onClick = () => {},
    features = [ITEM_FEATURES.FREE_DIAGNOSTIC],
}) => (
  <section onClick={onClick} className={styles.item}>
    <div className={styles.content}>
      <div className={styles.texts}>
        <header className={styles.header}>{header}</header>

        <main className={styles.text}>{text}</main>

        {features.length > 0 && (
          <ul className={styles.features}>
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}
      </div>

      <footer className={styles.footer}>
        <p className={styles.price}>{price} ₽</p>
        <p className={styles.time}>От {minutes} мин</p>
      </footer>
    </div>

    <div className={cn(styles.indicator, { [styles.indicatorActive]: active })} />
  </section>
)

export default CatalogItem
