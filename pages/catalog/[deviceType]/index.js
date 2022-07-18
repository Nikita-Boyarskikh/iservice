import { useRouter } from 'next/router'
import { useContext } from 'react'

import useApi from 'hooks/useApi'
import { getModels } from 'lib/api'
import { StateContext } from 'state/context'

import PageLayout from 'components/PageLayout'
import DeviceTypeSection from 'components/DeviceTypeSection'

const CatalogDeviceTypePage = () => {
  const router = useRouter()
  const { deviceType } = router.query
  const { state } = useContext(StateContext)

  const models = useApi(() => getModels({ deviceType }), 6)

  return (
    <PageLayout reviews={state.reviews} articles={state.articles}>
      <DeviceTypeSection deviceType={deviceType} models={models} />
    </PageLayout>
  )
}

export default CatalogDeviceTypePage
