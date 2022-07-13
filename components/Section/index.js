import cn from 'classnames'

import styles from './Section.module.css'

const Section = ({ header, dimmed = false, children }) => (
  <section className={cn(styles.section, { [styles.dimmed]: dimmed })}>
    <h2 className={styles.sectionHeader}>{header}</h2>
    {children}
  </section>
)

export default Section
