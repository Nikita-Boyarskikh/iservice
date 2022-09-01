import { useCallback, useMemo } from 'react'

import Catalog from './Catalog'

import styles from './CatalogSection.module.css'

const CatalogSection = ({ catalog, selectedItems, onChangeSelectedItems }) => {
  const selectedItemsBySection = useMemo(() => (
    catalog.map(
      ({ items }) => items.filter(
        item => selectedItems.includes(item.id)
      )
    )
  ), [catalog, selectedItems])

  const changeBySection = useCallback((i) => {
    const currentSection = selectedItemsBySection[i]
    return (item) => {
      const toggledItemIdx = currentSection.findIndex((x) => x === item)
      if (toggledItemIdx !== -1) {
        currentSection.splice(toggledItemIdx, 1)
      } else {
        if (currentSection.length >= 2) {
          currentSection.shift()
        }
        currentSection.push(item)
      }

      const changedBySection = selectedItemsBySection.splice(i, 1, currentSection)
      const selectedItems = changedBySection.reduce((all, section) => {
        return all.concat(section)
      })
      onChangeSelectedItems(selectedItems)
    }
  },   [selectedItemsBySection, onChangeSelectedItems])

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.catalog}>
        {catalog.map(({ section, items }, i) => (
          <Catalog
            key={i}
            header={section}
            items={items}
            activeItemIds={selectedItemsBySection[i]}
            toggle={changeBySection(i)}
          />
        ))}
      </div>

      <div className={styles.preview}>
        <img src="/images/iphone_11_pro_max.png" alt="preview" className={styles.image} />
        <span className={styles.remark}>
        Запчасти для ремонта уже включены в стоимость работы эта окончательная цена
      </span>
      </div>
    </section>
  )
}

export default CatalogSection
