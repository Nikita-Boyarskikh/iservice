import { useMemo } from 'react'

import Section from 'components/Section'
import Swiper from 'components/Swiper'
import Advantage  from './Advantage'

import useIsMobile from 'hooks/useIsMobile'

import styles from './Advantages.module.css'

const AdvantagesSection = ({ advantages }) => {
  const isMobile = useIsMobile()

  const advantagesTags = useMemo(() => (
    advantages.map(({ img, header, body }, i) => (
      <Advantage img={img} header={header} key={i}>
        {body}
      </Advantage>
    ))
  ), [advantages])

  return (
    <Section header="Почему мы?">
      {isMobile ? (
        <Swiper slides={advantagesTags} />
      ) : (
        <div className={styles.advantages}>{advantagesTags}</div>
      )}
    </Section>
  )
}

export default AdvantagesSection
