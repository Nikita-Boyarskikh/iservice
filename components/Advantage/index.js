import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

import styles from './Advantage.module.css'

const Advantage = ({ img, header, children }) => (
  <article className={styles.advantage}>
    <div className={styles.image}>
      {img ? (
        <Image src={img} alt={header} width={70} height={70} />
      ) : (
        <Skeleton circle width={70} height={70} />
      )}
    </div>
    <section className={styles.text}>
      <header className={styles.header}>{header || <Skeleton inline height={30} />}</header>
      <div className={styles.body}>{children || <Skeleton count={5} />}</div>
    </section>
  </article>
)

export default Advantage
