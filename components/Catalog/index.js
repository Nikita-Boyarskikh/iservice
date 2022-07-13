import Skeleton from 'react-loading-skeleton'

import useIsMobile from 'hooks/useIsMobile'

import CatalogItem from 'components/Catalog/CatalogItem'

import styles from 'pages/catalog/Catalog.module.css'

const Catalog = ({ header, items, activeItemIdx, onChangeActiveItemIdx }) => {
  const isMobile = useIsMobile()

  return (
    <div className={styles.catalog}>
      <h2 className={styles.header}>{header || <Skeleton />}</h2>

      <ul className={styles.items}>
        {items ? (
          items.map(({ header, text, price, minutes }, i) => (
            <li className={styles.item} key={i}>
              <CatalogItem header={header} text={text} price={price} minutes={minutes} active={activeItemIdx === i} />
            </li>
          ))
        ) : (
          <Skeleton height={isMobile ? 130 : 200} />
        )}
      </ul>
    </div>
  )
}

export default Catalog
