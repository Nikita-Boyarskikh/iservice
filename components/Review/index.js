import Rating from 'components/Rating'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

import styles from './Review.module.css'

const Review = ({ name, avatar, rating = 5, children }) => (
  <div className={styles.review}>
    <div className={styles.head}>
      <div className={styles.avatar}>
        {avatar ? (
          <Image src={avatar} alt="avatar" width={72} height={72} />
        ) : (
          <Skeleton width={72} height={72} inline />
        )}
      </div>
      <div className={styles.nameWithRating}>
        <h3 className={styles.name}>{name || <Skeleton /> }</h3>
        <Rating rating={rating} />
      </div>
    </div>
    <div>{children || <Skeleton count={2} />}</div>
  </div>
)

export default Review
