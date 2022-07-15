import Catalog from './Catalog'

import styles from './CatalogSection.module.css'

const CatalogSection = ({ catalog, selectedPlaceId, toggle }) => (
  <section className={styles.catalogContainer}>
    <div className={styles.catalog}>
      {catalog.map(({ section, items }, i) => (
        <Catalog
          key={i}
          header={section}
          items={items}
          activeItemId={selectedPlaceId}
          toggle={toggle}
        />
      ))}
    </div>

    <div className={styles.preview}>
      <img src="images/iphone_11_pro_max.png" alt="preview" className={styles.image} />
      <span className={styles.remark}>
        Запчасти для ремонта уже включены в стоимость работы эта окончательная цена
      </span>
    </div>
  </section>
)

export default CatalogSection
