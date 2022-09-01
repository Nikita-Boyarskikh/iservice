import cn from 'classnames'
import { MESSAGE_STATUSES, PLACE_STATUSES } from 'constants'

import Rating from 'components/Rating'

import DotIcon from 'public/icons/dot.svg'
import DoubleCheckmarkIcon from 'public/icons/doubleCheckmark.svg'
import styles from 'components/ChatLayout/ChatSelect/MasterCard/MasterCard.module.css'
import Skeleton from 'react-loading-skeleton'

const MasterCard = ({ master, messages = [] }) => {
  const lastMessage = messages[0]
  const LastMessageStatusIcon = {
    [MESSAGE_STATUSES.UNREAD]: DotIcon,
    [MESSAGE_STATUSES.READ]: DoubleCheckmarkIcon,
  }[lastMessage?.status]
  const isOnline = master?.status === PLACE_STATUSES.ONLINE
  const lastMessageStatusIconClass = {
    [MESSAGE_STATUSES.READ]: styles.read,
    [MESSAGE_STATUSES.UNREAD]: styles.unread,
  }[lastMessage?.status]

  return (
    <div className={styles.container}>
      <div className={cn(styles.avatar, {[styles.online]: isOnline})}>
        {master ? (
          <img src={master.avatar} alt="avatar" />
        ) : (
          <Skeleton circle width={100} height={100} />
        )}
        <DotIcon alt="online" />
      </div>

      <div className={styles.content}>
        <div className={styles.name}>{master ? master.name : <Skeleton />}</div>
        <div className={styles.type}>{master ? master.type : <Skeleton />}</div>
        {lastMessage && (
          <div className={styles.message}>{lastMessage.text}</div>
        )}
        <div className={styles.rating}>
          <Rating rating={master ? master.rating : 0} />
          <span className={styles.reviews}>{master ? master.reviews : <Skeleton />}</span>
        </div>
      </div>

      {lastMessage && (
        <div className={styles.lastMessageStatus}>
          <div className={cn(styles.status, lastMessageStatusIconClass)}>
            <LastMessageStatusIcon alt={lastMessage?.status} />
          </div>
          <span className={styles.date}>
            {lastMessage.createdAt.toLocaleDateString(navigator.language, {month: 'short', day: 'numeric'})}
          </span>
        </div>
      )}
    </div>
  )
}

export default MasterCard
