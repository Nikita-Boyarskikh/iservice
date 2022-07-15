import { useMemo } from 'react'

import PaymentMethod from './PaymentMethod'

import { PAYMENT_METHOD_TYPES } from 'constants'

import styles from './PaymentMethods.module.css'
import CardIcon from 'public/icons/card.svg'
import PlusIcon from 'public/icons/plus.svg'
import RoubleIcon from 'public/icons/rouble.svg'

const PaymentMethods = ({ current, selected, setSelected }) => {
  const paymentMethods = useMemo(() => {
    const cache = {
      id: 'cache',
      name: 'Наличные',
      icon: <RoubleIcon />,
    }
    const add = {
      id: 'add',
      name: 'Добавить карту',
      icon: <PlusIcon />,
    }

    if (current && current.type === PAYMENT_METHOD_TYPES.BANK_CARD) {
      const currentMethod = {
        id: 'current',
        name: <span dangerouslySetInnerHTML={{
          __html: `${current.name} &bull; ${current.lastNumbers}`,
        }} />,
        icon: <CardIcon />,
      }
      return [cache, currentMethod, add]
    }

    if (current && current.type === PAYMENT_METHOD_TYPES.CASH) {
      setSelected(cache.id)
    }

    return [cache, add]
  }, [current, setSelected])

  return (
    <section className={styles.paymentMethods}>
      {paymentMethods.map(({ name, icon, id }) => (
        <PaymentMethod
          key={id}
          id={id}
          name={name}
          icon={icon}
          selected={selected === id}
          select={() => setSelected(id)}
        />
      ))}
    </section>
  )
}

export default PaymentMethods
