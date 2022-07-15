import { useContext } from 'react'

import AdvantagesSection from 'components/AdvantagesSection'
import Hero from 'components/Hero'
import PageLayout from 'components/PageLayout'

import useApi from 'hooks/useApi'
import { getAdvantages } from 'lib/api'
import { StateContext } from 'state/context'

const IndexPage = () => {
  const { state } = useContext(StateContext)
  const advantages = useApi(getAdvantages)

  return (
    <PageLayout reviews={state.reviews} articles={state.articles}>
      <Hero />
      <AdvantagesSection advantages={advantages} />
    </PageLayout>
  )
}

export default IndexPage
