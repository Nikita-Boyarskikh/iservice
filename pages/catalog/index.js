import { useContext, useState } from 'react'

import PageLayout from 'components/PageLayout'
import CatalogSection from 'components/CatalogSection'
import MapSection from 'components/MapSection'
import RepairRequestSection from 'components/RepairRequestSection'

import { StateContext } from 'state/context'
import useApi from 'hooks/useApi'
import { getCatalog, sendRepairRequest } from 'lib/api'
import useListToggleHandler from 'hooks/useListToggleHandler'

const CatalogPage = () => {
  const { state } = useContext(StateContext)
  const catalog = useApi(getCatalog, 2)

  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  const changeOpenId = useListToggleHandler(selectedPlaceId, setSelectedPlaceId)

  return (
    <PageLayout reviews={state.reviews} articles={state.articles}>
      <CatalogSection catalog={catalog} selectedPlaceId={selectedPlaceId} toggle={changeOpenId} />
      <RepairRequestSection onSubmit={sendRepairRequest} />
      <MapSection
        catalog={catalog}
        selectedPlaceId={selectedPlaceId}
        toggle={changeOpenId}
        currentPaymentMethod={state.user.paymentMethods.current}
      />
    </PageLayout>
  )
}

export default CatalogPage
