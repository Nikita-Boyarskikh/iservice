import Catalog from 'components/Catalog'
import Map, { PLACE_STATUSES, PLACE_TYPES } from 'components/Map'
import PageLayout from 'components/PageLayout'
import Swiper from 'components/Swiper'

import useApi from 'hooks/useApi'
import { getCatalog } from 'lib/api'
import Link from 'next/link'
import { useState } from 'react'

import styles from './Catalog.module.css'

const CatalogPage = () => {
  const catalog = useApi(getCatalog, 1)
  const [selectedPlaceIdx, setSelectedPlaceIdx] = useState(null);

  const places = [
    {
      id: 1,
      x: 55.755819,
      y: 37.617644,
      name: 'Joseph Gonzalez',
      avatar: 'images/joseph_gonzalez.png',
      type: PLACE_TYPES.SERVICE,
      rating: 5.0,
      status: PLACE_STATUSES.ONLINE,
      reviews: 23,
      startFrom: new Date(),
      price: 123,
    }
  ]

  return (
    <PageLayout>
      <section className={styles.catalogContainer}>
        <div className={styles.catalog}>
          {catalog.map(({ section, items }, i) => (
            <Catalog header={section} items={items} activeItemIdx={0} key={i} />
          ))}
        </div>

        <div className={styles.preview}>
          <img src="images/iphone_11_pro_max.png" alt="preview" className={styles.image} />
          <span className={styles.remark}>Запчасти для ремонта уже включены в стоимость работы эта окончательная цена</span>
        </div>
      </section>

      <section className={styles.repairRequest}></section>

      <section className={styles.map}>
        <div className={styles.places}>
          <Swiper slides={places.map(({ name, price, id }) => (
            <Link href={`/catalog/${id}`} key={id}><a>
              <div className={styles.place}>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>{price}</div>
              </div>
            </a></Link>
          ))} withScrollbar />
        </div>

        <Map
          x={55.755819}
          y={37.617644}
          places={places}
          selectedPlaceIdx={selectedPlaceIdx}
          onChangeSelectedPlaceIdx={setSelectedPlaceIdx}
        />
      </section>
    </PageLayout>
  )
}

export default CatalogPage
