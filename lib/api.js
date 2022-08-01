import { v4 as uuid4 } from 'uuid'

import { ITEM_FEATURES, PAYMENT_METHOD_TYPES, PLACE_STATUSES, PLACE_TYPES } from 'constants'
import { range } from 'lib/utils'

export const getUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      account: 123,
      paymentMethods: {
        current: {
          type: PAYMENT_METHOD_TYPES.BANK_CARD,
          name: 'Мир',
          lastNumbers: '9932',
        },
      },
    }), 300)
  })
}

export const getModels = async ({ deviceType }) => {
  console.log('getModels', deviceType)
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        id: uuid4(),
        name: 'MacBooK Pro Retina',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'IPad Pro 11 (2021)',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'IPad Air 4',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'iMac (2012-2019)',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'iPhone 13',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'iPhone 12',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'iPhone 11',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'iPhone 8',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'iPhone X',
        src: 'public/images/iphone_11_pro_max.png',
      },
      {
        id: uuid4(),
        name: 'iPhone XS',
        src: 'public/images/iphone_11_pro_max.png',
      },
    ]), 300)
  })
}

export const getCatalog = async ({ deviceType, model }) => {
  console.log('getCatalog', deviceType, model)
  const createDummyCatalogItem = (i) => ({
    id: uuid4(),
    place: {
      x: 55.755819 + i * 0.01,
      y: 37.617644 + i * 0.01,
    },
    item: {
      name: 'Диагностика IPhone 11 Pro Max',
      description: 'Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max',
      price: 1500,
      minutes: 30,
      features: [ITEM_FEATURES.FREE_DIAGNOSTIC],
    },
    seller: {
      name: 'Joseph Gonzalez',
      avatar: '/images/joseph_gonzalez.png',
      type: PLACE_TYPES.SERVICE,
      rating: 5.0,
      status: PLACE_STATUSES.ONLINE,
      reviews: 23,
      startFrom: new Date(),
    },
  })

  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        section: 'Стоимость услуг по ремонту iPhone 11 Pro Max',
        items: range(3).map(createDummyCatalogItem),
      },
      {
        section: 'Замена стекла / экрана дисплея',
        items: range(5).map(createDummyCatalogItem),
      },
    ]), 300)
  })
}

export const getAdvantages = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        img: '/images/car.png',
        header: 'Выезд',
        body: 'Время - деньги. Заказав переклейку или  ремонт iphone у нас Вы можете сэкономить 3-4 часа времени. ' +
          'Мастер приедет и произведет ремонт у вас дома или в офисе или заберет y вас телефон, ' +
          'потом доставит отремонтированный.',
      },
      {
        img: '/images/star.png',
        header: 'Качество',
        body: 'Наши мастера имеют 10+ лет опыта работы в области переклейки и ремонта Iphone. ' +
          'Работая с нами, Вы можете быть совершенно уверены в том, что ваш телефон в надежных и опытных руках.',
      },
      {
        img: '/images/label.png',
        header: 'Цены',
        body: 'Наши цены ниже среднерыночных, несмотря на то, что качество работы на самом высшем уровне. ' +
          'Несмотря на то, что мы используем только оригинальные зап. части. Мы любим свою работу, ' +
          'работаем много и это позволяет предлагать лучшие на рынке условия.',
      },
      {
        img: '/images/timer.png',
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
      userId: uuid4(),
      name: 'Адам и Ева. Потерянный Рай',
      avatar: '/images/yandex_feedback.png',
      rating: 5,
      text: 'Рекомендуем данную организацию, заказом довольны, все устроило.',
    }))), 300)
  })
}

export const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(range(10).map((i) => ({
      id: uuid4(),
      header: 'Одежда, обувь и аксессуары',
      img: '/images/example_phone.png',
      body: 'Госпли развития. В рамках спецификации современных стандартов, ключевые ...',
      createdAt: new Date(),
    }))), 300)
  })
}

export const sendRepairRequest = async (data) => {
  console.log('sendRepairRequest', data)
  return Promise.resolve()
}

export const getServiceChoices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        id: 'display',
        name: 'Ремонт дисплея',
      },
      {
        id: 'keyboard',
        name: 'Ремонт клавиатуры',
      },
      {
        id: 'software',
        name: 'Программное обеспечение',
      },
    ]), 300)
  })
}

export const getDeviceChoices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        id: 'iphone_10',
        name: 'iPhone 10',
      },
      {
        id: 'macbook_pro',
        name: 'MacBook Pro',
      },
      {
        id: 'ipad',
        name: 'iPad',
      },
    ]), 300)
  })
}

export const getServiceTypeChoices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        id: 'diagnostic',
        name: 'Диагностика',
      },
      {
        id: 'change',
        name: 'Замена деталей',
      },
      {
        id: 'setting',
        name: 'Настройка',
      },
    ]), 300)
  })
}
