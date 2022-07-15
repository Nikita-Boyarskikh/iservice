import Section from 'components/Section'
import Swiper from 'components/Swiper'
import Link from 'next/link'
import { useMemo } from 'react'

import Review from './Review'

import useIsMobile from 'hooks/useIsMobile'

const ReviewsSection = ({ reviews }) => {
  const isMobile = useIsMobile()

  const reviewsTags = useMemo(() => (
    reviews.map(({ userId, name, rating, avatar, text }, i) => {
      const review = (
        <Review name={name} avatar={avatar} rating={rating} key={i}>{text}</Review>
      )

      if (!userId) {
        return review
      }

      return (
        <Link href={`/reviews/${userId}`} key={userId}><a>{review}</a></Link>
      )
    })
  ), [reviews])

  return (
    <Section dimmed header="Отзывы">
      <Swiper
        slides={reviewsTags}
        slidesPerView={isMobile ? 1 : 4}
        spaceBetween={30}
        withNavigation={!isMobile}
        withScrollbar={!isMobile}
      />
    </Section>
  )
}

export default ReviewsSection
