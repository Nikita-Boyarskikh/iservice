import Place from './Place'

import styles from './PlacesSection.module.css'

const PlacesSection = ({ places }) => (
  <div className={styles.places}>
    {places.map(({ item: { name, price }, id }) => (
      <Place key={id} id={id} name={name} price={price} />
    ))}
  </div>
)

export default PlacesSection
