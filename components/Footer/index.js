import Link from 'next/link'

import Logo, { SIZES as LOGO_SIZES } from 'components/Logo'

import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Logo size={LOGO_SIZES.SMALL} />
    <div className={styles.content}>
      <div className={styles.requisites}>
        Телефон: <a href="tel:+74953746474">+7 (495) 374-64-74</a><br />
        Адрес: <a href="https://yandex.ru/maps/-/CCUNeTgdtC">
          г. Москва, ул. Никольская 10<br />
          (ТРЦ &quot;Никольская Плаза / Вокруг света&quot;)<br />
        </a>
        Работаем ежедневно 10:00 - 20:00,<br />
        без перерывов и выходных
      </div>

      <div className={styles.menu}>
        <ul>
          <li><Link href="/"><a>О компании</a></Link></li>
          <li><Link href="/"><a>Как мы работаем</a></Link></li>
          <li><Link href="/"><a>Гарантия</a></Link></li>
          <li><Link href="/"><a>Вакансии</a></Link></li>
          <li><Link href="/"><a>Контакты</a></Link></li>
        </ul>

        <ul>
          <li><Link href="/"><a>Новости</a></Link></li>
          <li><Link href="/"><a>Блог</a></Link></li>
          <li><Link href="/"><a>Акции и скидки</a></Link></li>
          <li><Link href="/reviews"><a>Отзывы клиентов</a></Link></li>
        </ul>
      </div>

      <div className={styles.menu}>
        <ul>
          <li><Link href={{ pathname: '/catalog/[deviceType]', query: { deviceType: 'iphone' } }}>
            <a>Ремонт iPhone</a>
          </Link></li>
          <li><Link href={{ pathname: '/catalog/[deviceType]', query: { deviceType: 'ipad' } }}>
            <a>Ремонт iPad</a>
          </Link></li>
          <li><Link href={{ pathname: '/catalog/[deviceType]', query: { deviceType: 'mac' } }}>
            <a>Ремонт MacBook</a>
          </Link></li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
