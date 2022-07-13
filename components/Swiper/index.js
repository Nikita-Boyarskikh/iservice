import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import styles from './Swiper.module.css'

const Swiper = ({ slides, withNavigation=false, withScrollbar=false, ...other }) => {
  const modules = [A11y]

  if (withNavigation) {
    modules.push(Navigation)
  }
  modules.push(withScrollbar ? Scrollbar : Pagination)

  return (
    <div className={styles.swiper}>
      <SwiperComponent
        simulateTouch
        modules={modules}
        navigation={withNavigation}
        scrollbar={withScrollbar && { draggable: true }}
        pagination={{
          type: 'progressbar',
          horizontalClass: styles.swiperProgressBar,
          progressbarFillClass: styles.swiperProgressBarFill,
        }}
        onPaginationUpdate={(swiper, paginationEl) => {
          paginationEl.style.setProperty('--current-slide', swiper.activeIndex)
          paginationEl.style.setProperty('--slides-number', swiper.slides.length)
        }}
        {...other}
      >
        {slides.map((slide, i) => (
          <SwiperSlide className={styles.swiperElement} key={i}>
            {slide}
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  )
}

export default Swiper
