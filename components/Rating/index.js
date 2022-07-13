import { range } from 'lib/utils'

import StarIcon from 'public/icons/star.svg'
import styles from './Rating.module.css'

const Rating = ({ rating }) => (
  <div className={styles.rating}>
    {range(rating).map((i) => (
      <StarIcon alt="star" key={i} />
    ))}
  </div>
)

export default Rating
