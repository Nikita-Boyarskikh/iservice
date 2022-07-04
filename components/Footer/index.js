import Link from 'next/link'

import Logo, { SIZES as LOGO_SIZES } from 'components/Logo'

import styles from './Footer.module.css'

export const MENU_ITEMS = [
  [
    [
      {
        name: 'О компании',
        href: '/',
      },
      {
        name: 'Как мы работаем',
        href: '/',
      },
      {
        name: 'Гарантия',
        href: '/',
      },
      {
        name: 'Вакансии',
        href: '/',
      },
      {
        name: 'Контакты',
        href: '/',
      },
    ],
    [
      {
        name: 'Новости',
        href: '/',
      },
      {
        name: 'Блог',
        href: '/',
      },
      {
        name: 'Акции и скидки',
        href: '/',
      },
      {
        name: 'Отзывы клиентов',
        href: '/reviews',
      },
    ],
  ],
  [
    [
      {
        name: 'Ремонт iPhone',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'phone' } },
      },
      {
        name: 'Ремонт iPad',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'tablet' } },
      },
      {
        name: 'Ремонт MacBook',
        href: { pathname: '/catalog/[deviceType]', query: { deviceType: 'notebook' } },
      },
    ],
  ],
]

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

      {MENU_ITEMS.map((menu, i) => (
        <div key={i} className={styles.menu}>
          {menu.map((column, i) => (
            <ul key={i}>
              {column.map(({ name, href }, i) => (
                <li key={i}><Link href={href}><a>{name}</a></Link></li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  </footer>
)

export default Footer
