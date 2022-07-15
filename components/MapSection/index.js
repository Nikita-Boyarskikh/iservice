import { useMemo, useState } from 'react'

import PlacesSection from './PlacesSection'
import PaymentMethods from './PaymentMethodsSection'
import Map from './Map'

import styles from './MapSection.module.css'

const MapSection = ({ catalog, selectedPlaceId, toggle, currentPaymentMethod }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)

  const places = useMemo(() => catalog.reduce((all, current) => {
    if (current.items) {
      all.push(...current.items)
    }
    return all
  }, []), [catalog])

  return (
    <section className={styles.map}>
      <PlacesSection places={places} />

      <Map
        x={55.755819}
        y={37.617644}
        places={places}
        selectedPlaceId={selectedPlaceId}
        toggle={toggle}
      />

      <PaymentMethods
        selected={selectedPaymentMethod}
        setSelected={setSelectedPaymentMethod}
        current={currentPaymentMethod}
      />
    </section>
  )
}

export default MapSection
