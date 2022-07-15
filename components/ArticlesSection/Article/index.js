import Skeleton from 'react-loading-skeleton'

import styles from './Article.module.css'

const Article = ({ img, header, createdAt, children }) => (
  <article className={styles.article}>
    {img ? (
      <img className={styles.image} src={img} alt={header} />
    ) : (
      <Skeleton
        borderRadius={0}
        className={styles.image}
        style={{
          aspectRatio: '1/1',
          lineHeight: '20px',
        }}
      />
    )}
    <section className={styles.body}>
      <header className={styles.header}>{header || <Skeleton />}</header>
      <div className={styles.text}>{children || <Skeleton count={2} />}</div>
      {createdAt ? (
        <time dateTime={createdAt.toISOString()} className={styles.createdAt}>{createdAt.toLocaleDateString()}</time>
      ) : (
        <Skeleton />
      )}
    </section>
  </article>
)

export default Article
