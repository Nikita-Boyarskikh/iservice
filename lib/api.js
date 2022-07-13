import { FEATURES } from 'components/Catalog/CatalogItem'
import { range } from 'lib/utils'

export const getUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ account: 123 }), 300)
  })
}

export const getCatalog = async () => {
  const createDummyCatalogItem = () => ({
    header: 'Диагностика IPhone 11 Pro Max',
    text: 'Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max',
    price: 1500,
    minutes: 30,
    features: [FEATURES.FREE_DIAGNOSTIC],
  })

  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        section: 'Стоимость услуг по ремонту iPhone 11 Pro Max',
        items: range(2).map(createDummyCatalogItem),
      },
      {
        section: 'Замена стекла / экрана дисплея',
        items: range(1).map(createDummyCatalogItem),
      },
    ]), 300)
  })
}

export const getAdvantages = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        img: 'images/car.png',
        header: 'Выезд',
        body: 'Время - деньги. Заказав переклейку или  ремонт iphone у нас Вы можете сэкономить 3-4 часа времени. ' +
          'Мастер приедет и произведет ремонт у вас дома или в офисе или заберет y вас телефон, ' +
          'потом доставит отремонтированный.',
      },
      {
        img: 'images/star.png',
        header: 'Качество',
        body: 'Наши мастера имеют 10+ лет опыта работы в области переклейки и ремонта Iphone. ' +
          'Работая с нами, Вы можете быть совершенно уверены в том, что ваш телефон в надежных и опытных руках.',
      },
      {
        img: 'images/label.png',
        header: 'Цены',
        body: 'Наши цены ниже среднерыночных, несмотря на то, что качество работы на самом высшем уровне. ' +
          'Несмотря на то, что мы используем только оригинальные зап. части. Мы любим свою работу, ' +
          'работаем много и это позволяет предлагать лучшие на рынке условия.',
      },
      {
        img: 'images/timer.png',
        header: 'Сроки работы',
        body: 'Мы пунктуальны и ответственны. Называем срок работы с запасом и выполняем работу почти всегда ' +
          'раньше обещанного срока, а ровно в срок сдаем тогда, когда происходят непредвиденные обстоятельства.',
      },
    ]), 300)
  })
}

export const getReviews = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(range(10).map((i) => ({
      userId: i,
      name: 'Адам и Ева. Потерянный Рай',
      avatar: 'images/yandex_feedback.png',
      rating: 5,
      text: 'Рекомендуем данную организацию, заказом довольны, все устроило.',
    }))), 300)
  })
}

export const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(range(10).map((i) => ({
      id: i,
      header: 'Одежда, обувь и аксессуары',
      img: 'images/example_phone.png',
      body: 'Госпли развития. В рамках спецификации современных стандартов, ключевые ...',
      createdAt: new Date(),
    }))), 300)
  })
}
