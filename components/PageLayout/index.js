import ArticlesSection from 'components/ArticlesSection'
import ReviewsSection from 'components/ReviewSection'

const PageLayout = ({ reviews, articles, children }) => {
  return (
    <>
      {children}
      <ReviewsSection reviews={reviews} />
      <ArticlesSection articles={articles} />
    </>
  )
}

export default PageLayout
