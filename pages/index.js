import cn from 'classnames'
import Article from 'components/Article'
import Review from 'components/Review'
import useApi from 'hooks/useApi'
import { getAdvantages, getArticles, getReviews } from 'lib/api'
import Link from 'next/link'
import { useMemo } from 'react'

import Advantage  from 'components/Advantage'
import Swiper from 'components/Swiper'
import useIsMobile from 'hooks/useIsMobile'

import styles from './Index.module.css'

const Index = () => {
  const isMobile = useIsMobile()

  const advantages = useApi(getAdvantages)
  const advantagesTags = useMemo(() => (
    advantages.map(({ img, header, body }, i) => (
      <Advantage img={img} header={header} key={i}>
        {body}
      </Advantage>
    ))
  ), [advantages])

  const reviews = useApi(getReviews)
  const reviewsTags = useMemo(() => (
    reviews.map(({ name, rating, avatar, text, href = null }, i) => {
      const review = (
        <Review name={name} avatar={avatar} rating={rating} key={i}>{text}</Review>
      )

      if (!href) {
        return review
      }

      return (
        <Link href={href} key={i}><a>{review}</a></Link>
      )
    })
  ), [reviews])

  const articles = useApi(getArticles)
  const articlesTags = useMemo(() => (
    articles.map(({ img, header, body, createdAt, href }, i) => {
      const article = (
        <Article img={img} header={header} createdAt={createdAt} key={i}>{body}</Article>
      )

      if (!href) {
        return article
      }

      return (
        <Link href={href} key={i}><a>{article}</a></Link>
      )
    })
  ), [articles])

  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.header}>Переклейка дисплея любого iphone</h1>
        <div className={styles.subheader}>
          Oригинальные запчасти<br />
          Разумные цены<br />
          Выезд
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Почему мы?</h2>
        {isMobile ? (
          <Swiper slides={advantagesTags} />
        ) : (
          <div className={styles.advantages}>{advantagesTags}</div>
        )}
      </section>

      <section className={cn(styles.section, styles.dimmed)}>
        <h2 className={styles.sectionHeader}>Отзывы</h2>
        <Swiper
          slides={reviewsTags}
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={30}
          withNavigation={!isMobile}
          withScrollbar={!isMobile}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Статьи</h2>
        <Swiper
          slides={articlesTags}
          slidesPerView={isMobile ? 1 : 4}
          withNavigation={!isMobile}
          withScrollbar={!isMobile}
        />
      </section>
    </>
  )
}

export default Index
