import React, { useCallback, useContext } from 'react'
import { useRouter } from 'next/router'

import { StateContext } from 'state/context'

import Button from 'components/Button'
import PageLayout from 'components/PageLayout'

const ProfilePage = () => {
  const router = useRouter()
  const { state } = useContext(StateContext)

  const handleReviewsClick = useCallback(() => {
    router.push('/profile/reviews').then()
  }, [router])

  const handleSelectMasterClick = useCallback(() => {
    // router.push('/profile/reviews').then()
  }, [router])

  return (
    <PageLayout reviews={state.reviews} articles={state.articles}>
      <Button onClick={handleSelectMasterClick}>Выбрать мастера</Button>
      <Button onClick={handleReviewsClick}>Отзывы о мастере</Button>
    </PageLayout>
  )
}

export default ProfilePage
