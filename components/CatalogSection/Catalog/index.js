import { useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'

import useIsMobile from 'hooks/useIsMobile'

import CatalogItem from './CatalogItem'

import styles from './Catalog.module.css'

const Catalog = ({ header, items, activeItemId, toggle }) => {
  const isMobile = useIsMobile()

  const handleClickItem = useCallback((id) => {
    if (id !== activeItemId) {
      toggle(activeItemId)
    }
    toggle(id)
  }, [activeItemId, toggle])

  return (
    <div className={styles.catalog}>
      <h2 className={styles.header}>{header || <Skeleton />}</h2>

      <ul className={styles.items}>
        {items ? (
          items.map(({ id, item: { name, description, price, minutes, features } }) => (
            <li key={id}>
              <CatalogItem
                header={name}
                text={description}
                price={price}
                minutes={minutes}
                features={features}
                active={activeItemId === id}
                onClick={() => handleClickItem(id)}
              />
            </li>
          ))
        ) : (
          <Skeleton height={isMobile ? 130 : 160} count={2} className={styles.itemSkeleton} />
        )}
      </ul>
    </div>
  )
}

export default Catalog
