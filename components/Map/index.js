import { Map as YandexMap, Placemark } from '@pbe/react-yandex-maps'
import cn from 'classnames'
import { pluralize } from 'lib/utils'
import Link from 'next/link'
import { useCallback } from 'react'
import * as ReactDOMServer from 'react-dom/server'

import Rating from 'components/Rating'

import styles from './Map.module.css'

export const PLACE_TYPES = {
  SERVICE: 'Частный мастер/Сервис',
}

export const PLACE_STATUSES = {
  ONLINE: 'Онлайн',
  OFFLINE: 'Оффлайн',
}


export const Place = ({ name, avatar, type = PLACE_TYPES.SERVICE, rating, status, reviews, startFrom, id }) => (
  <div className={styles.place}>
    <img src={avatar} alt="avatar" className={styles.avatar} />
    <div className={styles.heading}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.type}>{type}</p>
      <Rating rating={rating} />
      <div className={styles.reviews}>
        <Link href={`reviews/${id}`}><a>{reviews} {pluralize(reviews, 'отзыв', 'отзыва', 'отзывов')}</a></Link>
      </div>
    </div>

    <label className={styles.label}>На сайте:</label>
    <div>с {startFrom.getFullYear()} года</div>
    <label className={styles.label}>Статус:</label>
    <div className={cn(styles.label, {
      [styles.online]: status === PLACE_STATUSES.ONLINE,
      [styles.offline]: status === PLACE_STATUSES.OFFLINE,
    })}>{status}</div>
    <label className={styles.label}>Оценка:</label>
    <div className={cn({
      [styles.good]: rating >= 4,
      [styles.normal]: rating >= 3 && rating < 4,
      [styles.bad]: rating < 3,
    })}>{rating.toFixed(1)}</div>
  </div>
)


const Map = ({
  x,
  y,
  width = '100%',
  height = 450,
  zoom = 9,
  places = [],
  selectedPlaceIdx = null,
  onChangeSelectedPlaceIdx = () => {},
}) => {
  const handleChangeSelectedPlace = useCallback((i) => {
    if (i === selectedPlaceIdx) {
      return
    }

    onChangeSelectedPlaceIdx(i)
  }, [])

  return (
    <YandexMap defaultState={{ center: [x, y], zoom }} width={width} height={height}>
      {places.map(({ x, y, name, avatar, type, rating, status, reviews, startFrom, id }) => (
        <Placemark
          key={id}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          defaultGeometry={[x, y]}
          properties={{
            item: id,
            balloonContentBody: ReactDOMServer.renderToStaticMarkup(
              <Place
                name={name}
                avatar={avatar}
                type={type}
                rating={rating}
                status={status}
                reviews={reviews}
                startFrom={startFrom}
                id={id}
              />
            ),
            hintContent: name,
          }}
          onClick={() => handleChangeSelectedPlace(id)}
          defaultOptions={{
            balloonPanelMaxMapArea: 0,
          }}
        />
      ))}
    </YandexMap>
  )
}

export default Map
