import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

import ImageCircle from 'components/ImageCircle'
import Section from 'components/Section'

import styles from './DeviceTypeSection.module.css'

const DeviceTypeSection = ({ deviceType, models }) => (
  <Section header={
    <div className={styles.header}>
      Ремонт {deviceType}
      <div className={styles.subheader}>Выберите модель {deviceType}, чтобы узнать стоимость ремонта.</div>
    </div>
  }>
    <div className={styles.section}>
      {models.map(({ id, name, src }, i) => (
        <div key={id || i} className={styles.deviceType}>
          {src ? (
            <Link href={`/catalog/${deviceType}/${id}`}><a>
              <ImageCircle alt={name} src={src} />
            </a></Link>
          ) : (
            <Skeleton circle width={250} height={250} />
          )}
          <div className={styles.text}>{name || <Skeleton />}</div>
        </div>
      ))}
    </div>
  </Section>
)

export default DeviceTypeSection
