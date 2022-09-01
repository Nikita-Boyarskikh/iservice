import { useRouter } from 'next/router'
import { useContext, useState } from 'react'

import PageLayout from 'components/PageLayout'
import CatalogSection from 'components/CatalogSection'
import MapSection from 'components/MapSection'
import RepairRequestSection from 'components/RepairRequestSection'

import { StateContext } from 'state/context'
import useApi from 'hooks/useApi'
import { getCatalog, sendRepairRequest } from 'lib/api'
import useListToggleHandler from 'hooks/useListToggleHandler'

const CatalogModelPage = () => {
  const router = useRouter()
  const { state } = useContext(StateContext)
  const catalog = useApi(() => getCatalog({
    deviceType: router.query.deviceType,
    model: router.query.model,
  }), 2)

  const [selectedItems, setSelectedItems] = useState([])
  const [mapOpenedItem, setMapOpenedItem] = useState(null)

  return (
    <PageLayout reviews={state.reviews} articles={state.articles}>
      <CatalogSection catalog={catalog} selectedItems={selectedItems} onChangeSelectedItems={setSelectedItems} />
      <RepairRequestSection onSubmit={sendRepairRequest} />
      <MapSection
        catalog={catalog}
        selectedPlaceId={mapOpenedItem}
        toggle={setMapOpenedItem}
        currentPaymentMethod={state.user.paymentMethods.current}
      />
    </PageLayout>
  )
}

export default CatalogModelPage
