import Link from 'next/link'
import { useMemo } from 'react'

import Article from './Article'
import Section from 'components/Section'
import Swiper from 'components/Swiper'

import useIsMobile from 'hooks/useIsMobile'

const ArticlesSection = ({ articles }) => {
  const isMobile = useIsMobile()

  const articlesTags = useMemo(() => (
    articles.map(({ img, header, body, createdAt, id }, i) => {
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
  ), [articles])

  return (
    <Section header="Статьи">
      <Swiper
        slides={articlesTags}
        slidesPerView={isMobile ? 1 : 4}
        withNavigation={!isMobile}
        withScrollbar={!isMobile}
      />
    </Section>
  )
}

export default ArticlesSection
