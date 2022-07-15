import { Map as YandexMap, Placemark as YandexPlacemark } from '@pbe/react-yandex-maps'
import cn from 'classnames'
import place from 'components/MapSection/PlacesSection/Place'
import { PLACE_STATUSES, PLACE_TYPES } from 'constants'
import { pluralize } from 'lib/utils'
import Link from 'next/link'
import { useEffect, useMemo, useRef } from 'react'
import * as ReactDOMServer from 'react-dom/server'

import Rating from 'components/Rating'

import styles from 'components/MapSection/Map/Map.module.css'

export const Place = ({ name, avatar, type = PLACE_TYPES.SERVICE, rating, status, reviews, startFrom, id }) => (
  <div className={styles.place}>
    <img src={avatar} alt="avatar" className={styles.avatar} />
    <div className={styles.heading}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.type}>{type}</p>
      <Rating rating={rating} />
      <div className={styles.reviews}>
        <Link href={`reviews/${id}`}><a>
          {reviews} {pluralize(reviews, 'отзыв', 'отзыва', 'отзывов')}
        </a></Link>
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

const Placemark = ({
    id,
    x,
    y,
    name,
    avatar,
    type,
    rating,
    status,
    reviews,
    startFrom,
    isOpen = false,
    toggle = () => {},
}) => {
  const placemark = useRef(null)

  useEffect(() => {
    if (!placemark.current) {
      return
    }

    if (isOpen) {
      placemark.current.balloon.open().then()
    } else {
      placemark.current.balloon.close().then()
    }
  }, [isOpen])

  useEffect(() => {
    if (!placemark.current) {
      return
    }

    const { events } = placemark.current
    const onClose = () => isOpen && toggle()
    const onOpen = () => !isOpen && toggle()

    events.add('balloonclose', onClose)
    events.add('balloonopen', onOpen)

    return () => {
      events.remove('balloonclose', onClose)
      events.remove('balloonopen', onOpen)
    }
  }, [isOpen, toggle])

  const balloonContentBody = useMemo(() => ReactDOMServer.renderToStaticMarkup(
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
  ), [name, avatar, type, rating, status, reviews, startFrom, id])

  return (
    <YandexPlacemark
      key={id}
      instanceRef={placemark}
      modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      defaultGeometry={[x, y]}
      properties={{
        item: id,
        balloonContentBody,
        hintContent: name,
      }}
      defaultOptions={{
        balloonPanelMaxMapArea: 0,
      }}
    />
  )
}

const Map = ({
  x,
  y,
  width = '100%',
  height = 450,
  zoom = 9,
  places = [],
  selectedPlaceId = null,
  toggle = () => {},
}) => {
  return (
    <YandexMap defaultState={{ center: [x, y], zoom }} width={width} height={height}>
      {places.map(({ place: { x, y }, seller: { name, avatar, type, rating, status, reviews, startFrom }, id }) => (
        <Placemark
          key={id}
          id={id}
          x={x}
          y={y}
          name={name}
          avatar={avatar}
          type={type}
          rating={rating}
          status={status}
          reviews={reviews}
          startFrom={startFrom}
          isOpen={id === selectedPlaceId}
          toggle={() => toggle(id)}
        />
      ))}
    </YandexMap>
  )
}

export default Map
