import { useMemo } from 'react'

import PageLayout from 'components/PageLayout'
import Section from 'components/Section'
import Advantage  from 'components/Advantage'
import Swiper from 'components/Swiper'

import useIsMobile from 'hooks/useIsMobile'
import useApi from 'hooks/useApi'
import { getAdvantages } from 'lib/api'

import styles from './Index.module.css'

const IndexPage = () => {
  const isMobile = useIsMobile()

  const advantages = useApi(getAdvantages)
  const advantagesTags = useMemo(() => (
    advantages.map(({ img, header, body }, i) => (
      <Advantage img={img} header={header} key={i}>
        {body}
      </Advantage>
    ))
  ), [advantages])

  return (
    <PageLayout>
      <section className={styles.hero}>
        <h1 className={styles.header}>Переклейка дисплея любого iphone</h1>
        <div className={styles.subheader}>
          Oригинальные запчасти<br />
          Разумные цены<br />
          Выезд
        </div>
      </section>

      <Section header="Почему мы?">
        {isMobile ? (
          <Swiper slides={advantagesTags} />
        ) : (
          <div className={styles.advantages}>{advantagesTags}</div>
        )}
      </Section>
    </PageLayout>
  )
}

export default IndexPage
