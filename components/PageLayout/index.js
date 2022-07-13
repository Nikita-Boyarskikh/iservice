import Link from 'next/link'
import { useContext, useMemo } from 'react'

import Swiper from 'components/Swiper'
import Article from 'components/Article'
import Review from 'components/Review'
import Section from 'components/Section'

import useIsMobile from 'hooks/useIsMobile'
import { StateContext } from 'state/context'

const PageLayout = ({ children }) => {
  const { state } = useContext(StateContext)
  const isMobile = useIsMobile()

  const reviewsTags = useMemo(() => (
    state.reviews.map(({ userId, name, rating, avatar, text }, i) => {
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
  ), [state.reviews])

  const articlesTags = useMemo(() => (
    state.articles.map(({ img, header, body, createdAt, id }, i) => {
      const article = (
        <Article img={img} header={header} createdAt={createdAt} key={i}>{body}</Article>
      )

      if (!id) {
        return article
      }

      return (
        <Link href={`/articles/${id}`} key={id}><a>{article}</a></Link>
      )
    })
  ), [state.articles])

  return (
    <>
      {children}

      <Section dimmed header="Отзывы">
        <Swiper
          slides={reviewsTags}
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={30}
          withNavigation={!isMobile}
          withScrollbar={!isMobile}
        />
      </Section>

      <Section header="Статьи">
        <Swiper
          slides={articlesTags}
          slidesPerView={isMobile ? 1 : 4}
          withNavigation={!isMobile}
          withScrollbar={!isMobile}
        />
      </Section>
    </>
  )
}

export default PageLayout
